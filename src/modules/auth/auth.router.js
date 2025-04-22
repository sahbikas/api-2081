// TODO: Router Application

// const express = require('express')
// const app = express()
const app = require('express').Router()
// const app = express.Router()
const auth = require('../../middlewares/auth.middleware')
const premissionCheck = require('../../middlewares/rbac.middleware')
const { ROLES} = require('../../config/constants.config')
const authCtrl = require('./auth.controller')
// endpoint or API

// Register a user
 // localhost:9005/auth/register
app.post("/register", authCtrl.registerProcess)


// email or password
app.post("/verify-opt", authCtrl.verifyOTP)

// Verify the activation token
app.post("/activate/:token", authCtrl.activateUser)

// password set/Activate user
app.post("/forget-Password", authCtrl.forgetPassword)

// update password
app.post("/update-password/:token", authCtrl.updatePassword)
// login
app.post("/login", authCtrl.login )
// logout
app.get("/Logout",auth, authCtrl.logout)
// profile
app.get("/me",auth, authCtrl.loggedInUser)
// user update
app.put("/user/:userId",auth, premissionCheck(ROLES.ADMIN), authCtrl.updateUser)

module.exports = app