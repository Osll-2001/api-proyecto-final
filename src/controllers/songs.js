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
  getById: async (req, res) => {
    const { id } = req.params
    try {
      const song = await SongsService.getById(id)
      res.status(200).json({ data: song })
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
  },
  updatePartial: async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
      await SongsService.updatePartial(id, body)
      res.status(200).json({ message: 'Modificación Exitosa' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
  updateComplete: async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
      await SongsService.updateComplete(id, body)
      res.status(200).json({ message: 'Modificación Exitosa' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
  delete: async (req, res) => {
    const { id } = req.params
    try {
      await SongsService.delete(id)
      res.status(200).json({ message: 'Se Eliminó la canción' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}

module.exports = BandsController
