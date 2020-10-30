require('dotenv').config();
const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 3000;
const routes = require("./routes/index");
const chuckRoute = require('./routes/chuckRoute')
const dadRoute = require('./routes/dadJokesRoute')
const favqRoute = require('./routes/faqRoute')
const errorHandler = require("./middlewares/errorHandler");

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(chuckRoute)
app.use(favqRoute)
app.use(dadRoute)
app.use(errorHandler);


app.listen(PORT, () => {
    console.log("Application is listening to http://localhost:" + PORT);
});