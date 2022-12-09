const UsersService = require('../services/users')

const UsersController = {
  get: async (req, res) => {
    const { query } = req
    try {
      const users = await UsersService.get(query)
      res.status(200).json({ data: users })
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },
  getById: async (req, res) => {
    const { id } = req.params
    try {
      const user = await UsersService.getById(id)
      res.status(200).json({ data: user })
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },
  create: async (req, res) => {
    const { body } = req

    try {
      await UsersService.create(body)
      res.sendStatus(201)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
  updatePartial: async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
      await UsersService.updatePartial(id, body)
      res.status(200).json({ message: 'Modificación Exitosa' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
  updateComplete: async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
      await UsersService.updateComplete(id, body)
      res.status(200).json({ message: 'Modificación Exitosa' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
  delete: async (req, res) => {
    const { id } = req.params
    try {
      await UsersService.delete(id)
      res.status(200).json({ message: 'El usuario Se elimino con Exito' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}

module.exports = UsersController
