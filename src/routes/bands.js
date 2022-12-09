const express = require('express')
const BandsRouter = express.Router()
const BandsController = require('../controllers/bands')

BandsRouter.get('/', BandsController.get)
BandsRouter.get('/:id', BandsController.getById)
BandsRouter.post('/', BandsController.create)
BandsRouter.patch('/:id', BandsController.updatePartial)
BandsRouter.put('/:id', BandsController.updateComplete)
BandsRouter.delete('/:id', BandsController.delete)

module.exports = BandsRouter
