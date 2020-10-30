const axios = require('axios')

class FavRoute {
    static async show(req,res, next) {
        const id = Math.ceil(Math.random() * 30) + 4
        axios({
            method: 'get',
            url: `https://favqs.com/api/quotes/${id}`,
            headers: {
                Authorization: "Bearer d23c0ae72c954db1ca8a737f4909c9af"
            }
        })
        .then(({data}) => {
            console.log(data)
            res.status(200).json(data.body)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = FavRoute