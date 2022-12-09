const UsersController = require('../controllers/users')
const express = require('express')
const UsersRouter = express.Router()

UsersRouter.get('/', UsersController.get)
UsersRouter.get('/:id', UsersController.getById)
UsersRouter.post('/', UsersController.create)
UsersRouter.patch('/:id', UsersController.updatePartial)
UsersRouter.put('/:id', UsersController.updateComplete)
UsersRouter.delete('/:id', UsersController.delete)

module.exports = UsersRouter
