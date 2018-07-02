const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/listings',require('./listings'))

exports = module.exports = {
    route
}