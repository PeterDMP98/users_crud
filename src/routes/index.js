const express = require('express');
const userRouter = require('./user.Router');
const router = express.Router();

// colocar las rutas aquí
router.use('/user', userRouter)


module.exports = router;