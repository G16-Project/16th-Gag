const axios = require('axios')

class ChuckController {
    static async show(req,res, next) {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            //console.log(response.data)
            res.status(200).json(response.data.value)
            console.log(response.data.value)
          } catch (error) {
            //console.log(error)
            next(error);
          }
    }
}


module.exports = ChuckController