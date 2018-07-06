const Wishlist = require('../../db').Wishlist
const route = require('express').Router()


route.get('/', (req, res) => {
    if (req.session.user) {
        Wishlist.findAll({
            where: {
                userID: parseInt(req.session.user.id)
            }
        })
            .then((wishlists) => {
                res.status(200).send({
                    wishlists
                });
            })
            .catch((err) => {
                console.log(err);
                req.session.user = null;
                res.status(500).send({
                    error: "No item in wishlist"
                })
            });
    }
    else{
        res.status(500).send({
            error: "User not logged in"
        })
    }
})

route.post('/',(req,res)=>{
    if (req.session.user) {
        console.log(req.body);
        
        Wishlist.create({
            userId: parseInt(req.session.user.id),
            bookname: req.body.product.bookname,
            authorname: req.body.product.authorname,
            price: req.body.product.price,
            image:req.body.product.image
        }).then((wishlist) => {
            res.status(201).send(wishlist)
        }).catch((err) => {
            console.log(err);
            res.status(501).send({
                error: err
            })
        })

    }
    else{
        res.status(501).send({
            error: "user not logged in"
        })
    }
})


exports = module.exports = route