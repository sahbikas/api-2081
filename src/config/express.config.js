const express = require('express')

// express

const app = express()
// const app = express.Router()
const authRouter = require("../modules/auth/auth.router")

// Routing

// ROuter load
app.use('/auth', authRouter)

module.exports = app;