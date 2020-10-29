const express = require('express')
const app = express()
const route = require('./routes/chuckRoute')
const port = 3000
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({extended:true}))
app.use(route)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`i love you ${port}`)
})

