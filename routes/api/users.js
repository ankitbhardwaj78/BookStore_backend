const User = require('../../db').User
const route = require('express').Router()

route.post('/signin', (req, res) => {
    // We want to send an array of all users
    // From our database here

    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
        .then((users) => {
            if (users)
                res.status(200).send(users)
            else
                res.status(500).send({
                    error: "Invalid email or password"
                })
        })
        .catch((err) => {
            console.log(err);

            res.status(500).send({
                error: "Invalid email or password"
            })
        })

})

route.post('/', (req, res) => {
    // We expect the req to have name in it
    // We will create a new user 
    console.log("in post");

    User.create({
        name: req.body.name,
        email: req.body.email,
        college: req.body.college,
        phoneNumber: req.body.number,
        address: req.body.address,
        password: req.body.password
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        console.log(err);

        res.status(501).send({

            error: err.errors
        })
    })
})

exports = module.exports = route