
const app = require("express").Router

const authRouter = require("../modules/auth/auth.router")

// Routing

// ROuter load
app.use('/auth', authRouter)

module.exports = app;