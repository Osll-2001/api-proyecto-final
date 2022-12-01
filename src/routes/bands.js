const express = require('express')
const BandsRouter = express.Router()
const BandsController = require('../controllers/bands')

BandsRouter.get('/', BandsController.get)
BandsRouter.post('/', BandsController.create)

module.exports = BandsRouter
