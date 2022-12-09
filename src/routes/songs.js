const express = require('express')
const SongRouter = express.Router()
const SongsController = require('../controllers/songs')

SongRouter.get('/', SongsController.get)
SongRouter.get('/:id', SongsController.getById)
SongRouter.post('/', SongsController.create)
SongRouter.patch('/:id', SongsController.updatePartial)
SongRouter.put('/:id', SongsController.updateComplete)
SongRouter.delete('/:id', SongsController.delete)

module.exports = SongRouter
