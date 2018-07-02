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
            if (users) {
                if (!bcrypt.compareSync(req.body.password, users.password)) {
                    return res.status(401).send({
                        title: 'Login failed',
                        error: { message: 'Invalid login credentials' }
                    });
                }
                console.log(users["dataValues"].id);
                req.session.email = req.body.email;
                req.session.userId = users["dataValues"].id;
                //res.end('done');
                var token = jwt.sign({ user: users }, 'secret', { expiresIn: 720000 });
                res.status(200).send({
                    message: 'Successfully logged in',
                    token: token,
                    userId: users["dataValues"].id
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
    console.log(req.body.password);
    console.log(req.body);
    User.create({
        name: req.body.name,
        email: req.body.email,
        college: req.body.college,
        phoneNumber: req.body.phoneNumber,
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


route.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send({

                msg: "successfully logged out"
            })
        }
    });
})

route.get('/isloggedin', function (req, res) {
    if(req.session.email)
    {
        res.send({
            done:true,
        })
    }
    else
    res.send({
        done:false,
    })
})


exports = module.exports = route