const Message = require('../../db').Message
const route = require('express').Router()


route.get('/',(req,res)=>{
    if (req.session.user) {
        Message.findAll({
            where:{
                receiverId:req.session.user.id
            }
        })
            .then((listings) => {
                res.status(200).send(listings)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive messages"
                })
            })
    }
    else {
        res.status(501).send({
            error: "not logged in"
        })
    }
})


route.post('/',(req,res)=>{
    console.log(req.body);
    
    if (req.session.user) {
       Message.create({
            receiverName: req.body.name,
            senderName: req.session.user.name,
            message: req.body.message,
            receiverId: req.body.id
        }).then((listing) => {
            res.status(201).send(listing)
        }).catch((err) => {
            console.log(err);
            res.status(501).send({
                error: err
            })
        })
    }
    else {
        res.status(501).send({
            error: "not logged in"
        })
    }
})

exports = module.exports = route