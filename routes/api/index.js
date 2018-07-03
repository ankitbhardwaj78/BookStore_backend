const route = require('express').Router()

route.use('/listings',require('./listings'))
route.use('/users', require('./users'))


exports = module.exports = {
    route
}