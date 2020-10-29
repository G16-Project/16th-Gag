const axios = require('axios')

class ChuckController {
    static async show(req,res) {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            //console.log(response.data)
            res.status(200).json({jokes:response.data.value})
          } catch (error) {
            //console.log(error)
            res.status(500).json(error);
          }
    }
}


module.exports = ChuckController