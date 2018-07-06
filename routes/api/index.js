const route = require('express').Router()

route.use('/messages',require('./messages'))
route.use('/wishlists',require('./wishlists'))
route.use('/listings',require('./listings'))
route.use('/users', require('./users'))


exports = module.exports = {
    route
}