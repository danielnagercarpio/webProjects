const dishesRoutes = require("./routes/dishes")
require("dotenv").config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 9000

// Daniel Nager Carpio
// midlewares 
app.use(express.json())
app.use('/api', dishesRoutes)

// Start mongo connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => { console.log("Connected to mongodb atlas") })
    .catch((error) => console.error("There is an Error in Connection.", error))

// Listen on port
app.listen(port, () => console.log(`Server listening on port ${app.get('port')}`))
