const express = require('express')
const BandsController = require('../controllers/bands')
const SongRouter = express.Router()
const SongController = require('../controllers/songs')

SongRouter.get('/', BandsController.get)

module.exports = SongRouter
