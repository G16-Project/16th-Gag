const route = require('express').Router()
const chuckController = require('../controllers/chuckController')

route.get('/random', chuckController.show)

module.exports = route

