const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser  = require("body-parser");
const NFT = require('./NFT');


const app=express()
app.use(bodyParser.urlencoded({extended:true}));

const port = 8000;





app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);

const connection_url='mongodb+srv://admin:admin123@jobs.i6zkc0p.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(connection_url,{
   
    useNewUrlParser: true,
    useUnifiedTopology: true,

   
     
});


app.post('/nfts', async(req,res)=>{
    const nftdetail= await (req.body)
    console.log("nft detail>>>",nftdetail);

    
    NFT.create(nftdetail,  (err, data) => {
        if (err) {
          res.status(500).send(err.message);
          console.log(err);
        } else {
          res.status(201).send(data);
        }
      });
    
})

  
app.listen(port,()=>console.log("listening on port",port));
