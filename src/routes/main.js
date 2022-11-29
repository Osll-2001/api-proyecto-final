const express=require('express')
const BandsRouter = require('./bands')

const routerApi=(app)=>{
  app.use('/bands',BandsRouter)
}

module.exports=routerApi