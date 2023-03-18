

const mongoose=require('mongoose')
const NFTSchema=mongoose.Schema({
title:String,
about:String,
symbol:String,
price:Number,
photo:String,

})
module.exports=mongoose.model("nfts",NFTSchema)