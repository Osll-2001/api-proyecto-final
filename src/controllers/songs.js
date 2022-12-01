const SongsService = require('../services/songs')

const BandsController = {
  get: async (req, res) => {
    const { query } = req

    try {
      const songs = await SongsService.get(query)
      res.status(200).json({ data: songs })
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },
  create: async (req, res) => {
    const { body } = req
    try {
      await SongsService.create(body)
      res.sendStatus(201)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}

module.exports = BandsController