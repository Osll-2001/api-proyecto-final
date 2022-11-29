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
  }
}

module.exports = BandsController
