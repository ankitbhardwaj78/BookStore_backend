const User = require('../../db').User
const route = require('express').Router()
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

route.post('/signin', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then((users) => {
            if (users)
            {
                if (!bcrypt.compareSync(req.body.password, users.password)) {
                    return res.status(401).json({
                        title: 'Login failed',
                        error: {message: 'Invalid login credentials'}
                    });
                }
                var token = jwt.sign({user: users}, 'secret', {expiresIn: 7200});
                res.status(200).json({
                    message: 'Successfully logged in',
                    token: token,
                    userId: users._id
                });
            }
                
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
    // We expect the req to have name,email,password,address,college,phn number in it
    // We will create a new user 
    console.log("in post");

    User.create({
        name: req.body.name,
        email: req.body.email,
        college: req.body.college,
        phoneNumber: req.body.number,
        address: req.body.address,
        password: bcrypt.hashSync(req.body.password, 10)
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