const axios = require('axios')

class DadJokesController {
    static async show(req,res, next) {
        axios({
            method: 'get',
            url: 'https://icanhazdadjoke.com/',
            headers: {
                Accept: "application/json" 
            }
        })
        .then(({data}) => {
            console.log(data.joke)
            res.status(200).json(data.joke)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = DadJokesController