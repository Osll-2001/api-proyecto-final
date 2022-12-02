const BandsService = require('../services/bands')

const BandsController = {
  get: async (req, res) => {
    const { query } = req
    try {
      const bands = await BandsService.get(query)
      res.status(200).json({ data: bands })
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },
  getById: async (req, res) => {
    const { id } = req.params

    try {
      const band = await BandsService.getById(id)
      res.status(200).json({ data: band })
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },
  create: async (req, res) => {
    const { body } = req
    try {
      await BandsService.create(body)
      res.sendStatus(201)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}

module.exports = BandsController
