

const mongoose=require('mongoose')
const NFTSchema=mongoose.Schema({
title:String,
about:String,
symbol:String,
price:Number,
photo:String,
date:String,

})
module.exports=mongoose.model("nfts",NFTSchema)