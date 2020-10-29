const express = require('express')
const app = express()
const route = require('./routes/chuckRoute')
const port = 3000

app.use(express.urlencoded({extended:true}))
app.use(route)

app.listen(port, () => {
    console.log(`i love you ${port}`)
})

