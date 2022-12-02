const express = require('express')
const SongRouter = express.Router()
const SongsController = require('../controllers/songs')

SongRouter.get('/', SongsController.get)
SongRouter.get('/:id', SongsController.getById)
SongRouter.post('/', SongsController.create)

module.exports = SongRouter
