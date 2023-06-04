const { getall, create, getOne, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
    .get(getall)
    .post(create)

userRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update)


module.exports = userRouter;