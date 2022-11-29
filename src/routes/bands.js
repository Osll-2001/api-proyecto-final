const express=require('express')
const BandsRouter=express.Router()
const BandsController=require('../controllers/bands')

BandsRouter.get('/',BandsController.get)

module.exports=BandsRouter