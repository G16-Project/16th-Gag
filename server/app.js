const express = require('express')
const app = express()
const route = require('./routes/chuckRoute')
const dadRoute = require('./routes/dadJokesRoute')
const port = 3000
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({extended:true}))
app.use(route)
app.use(dadRoute)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`i love you ${port}`)
})

