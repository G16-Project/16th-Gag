const express = require('express')
const app = express()
const chuckRoute = require('./routes/chuckRoute')
const dadRoute = require('./routes/dadJokesRoute')
const favqRoute = require('./routes/faqRoute')
const port = 3000
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({extended:true}))
app.use(chuckRoute)
app.use(dadRoute)
app.use(favqRoute)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`i love you ${port}`)
})

