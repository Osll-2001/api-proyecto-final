const express = require('express')
const SongRouter = express.Router()
const SongsController = require('../controllers/songs')

SongRouter.get('/', SongsController.get)
SongRouter.get('/:id', SongsController.getById)
SongRouter.post('/', SongsController.create)
SongRouter.delete('/:id', SongsController.delete)

module.exports = SongRouter
