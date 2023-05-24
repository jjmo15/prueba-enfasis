const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users.controller');

router
	.get('/users', usersController.getUsers)
	.get('/user/:id', usersController.getUserById)
	.get('/user', usersController.getUserByEmailAndPassword)
	.put('/user/:id', usersController.updateUser);

module.exports = router;