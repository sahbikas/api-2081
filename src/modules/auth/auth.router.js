// TODO: Router Application

const express = require('express')
const app = express()

// endpoint or API

// Register a user
 // localhost:9005/auth/register
app.post("/register", (req, res) => {

})

// email or password
app.post("/verify-opt", (req, res) => {

})

// Verify the activation token
app.post("/activate/:token", (req, res) => {

})

// password set/Activate user
app.post("/forget-Password", (req, res) => {

})

// 
app.post("/update-password/:token", (req, res) => {

})
app.post("/login", (req, res) => {

})
app.get("/Logout", (req, res) => {

})
app.get("/me", (req, res) => {

})
app.put("/user/:userId", (req, res) => {

})

module.exports = app