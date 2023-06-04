const catchError = require('../utils/catchError');
const User = require('../models/User');

const getall = catchError(async(req, res) => {
    const users = await User.findAll()
    return res.json(users)
})

const create = catchError(async (req, res) => {
    const user = req.body
    const createUser = await User.create(user)
    return res.status(201).json(createUser)
})

const getOne = catchError(async ( req, res) => {
    const {id} = req.params
    const oneUser = await User.findByPk(id)
    if (!oneUser) return res.status(404).json({message: "User not found"})

    return res.json(oneUser)
})

const remove = catchError(async (req, res) => {
    const {id} = req.params
    const removeUser = await User.destroy({where: {id}})
    if (!removeUser) return res.status(404).json({message: "User not found"})

    return res.status(204)
})

const update = catchError(async (req, res) => {
    const {id} = req.params
    const user = req.body
    const updateUser = await User.update(user, {where: {id}, returning: true})
    if (updateUser[0]==0) return res.status(404).json({message: "User not found"})
    return res.json(updateUser[1][0])
})

module.exports = {
    getall,
    create,
    getOne,
    remove,
    update
}