const express = require('express')
const mongoose = require('mongoose')
const routerApi = require('./routes/main')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

mongoose.connect('mongodb+srv://osll:osll2001@cluster0.79prd.mongodb.net/iesit?retryWrites=true&w=majority')

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hola' })
})

app.use(cors({
  origin: '*'
}))

routerApi(app)

app.listen(port, () => {
  console.log('server iniciado')
})
