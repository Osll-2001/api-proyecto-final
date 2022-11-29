const express = require('express')
const { default: mongoose } = require('mongoose')
const routerApi = require('./routes/main')
const app = express()
const port = 5000

mongoose.connect('mongodb+srv://osll:osll2001@cluster0.79prd.mongodb.net/iesit?retryWrites=true&w=majority')

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hola' })
})

routerApi(app)

app.listen(port, () => {
  console.log('server iniciado')
})
