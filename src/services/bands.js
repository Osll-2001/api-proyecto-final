const Bands=require('../models/Bands')

const BandService={
    get:async (query)=>{
        try{
           const bands=await Bands.find(query,{"__v":0})
           return bands
        }catch(err){
          throw Error('Error',err)
        }
    }
}

module.exports=BandService