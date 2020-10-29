const route = require('express').Router()
const favqRoute = require('../controllers/favqController')

route.get('/favQ', favqRoute.show)

module.exports = route

