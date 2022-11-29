const express = require('express')
const SongRouter = express.Router()
const SongsController = require('../controllers/songs')

SongRouter.get('/', SongsController.get)

module.exports = SongRouter
