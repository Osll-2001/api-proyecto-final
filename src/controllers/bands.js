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
      // if (!band) band = 'No se encontro a la banda'
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
  },
  updatePartial: async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
      await BandsService.updatePartial(id, body)
      res.status(200).json({ message: 'Modificación Exitosa' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
  updateComplete: async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
      await BandsService.updateComplete(id, body)
      res.status(200).json({ message: 'Modificación Exitosa' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
  delete: async (req, res) => {
    const { id } = req.params
    try {
      await BandsService.delete(id)
      res.status(200).json({ message: 'Banda Eliminada' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}

module.exports = BandsController
