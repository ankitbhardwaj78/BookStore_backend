const route = require('express').Router()
const Listing = require('../../db').Listing

route.get('/',(req,res)=>{
    Listing.findAll()
    .then((listings) => {
        res.status(200).send(listings)
    })
    .catch((err) => {
        res.status(500).send({
            error: "Could not retrive listings"
        })
    })
})

route.post('/add',(req,res)=>{
    console.log("in add");
    
  console.log(req.body);
  
})


exports = module.exports = route