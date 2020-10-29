const route = require('express').Router()
const dadJoke = require('../controllers/dadJokesController')

route.get('/dad-jokes', dadJoke.show)

module.exports = route

