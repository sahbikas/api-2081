const express = require('express')

// express

const app = express()
const authRouter = require("../modules/auth/auth.router")

// Routing

// ROuter load
app.use('/auth', authRouter)

module.exports = app;