// Example

// Middleware
// . Logging Middleware: Logs the request method and the url
// . Authentication Middleware: Checks is a user is authenticated

// Controller
// User Controller: Handles logic related to user operation like fetching user details, creating users etc.
const express = require('express')
const router = express.Router()

// Logging Middleware
router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
})

// Authetication middleware
router.use((req, res, next) => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    next()
  } else {
    res.status(401).send('Unauthorizes')
  }
})

// User Controller
const userController = (req, res) => {
  res.send('User profile information')
}
