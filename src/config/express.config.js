const express = require('express')

// express

const app = express()
// const app = express.Router()
const router = require('../routes/router')

app.use("/", router)


app.use((error, req, res, next) => {
    
})
module.exports = app;