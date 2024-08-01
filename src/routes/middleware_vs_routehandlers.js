const express = require('express')
const route = express.Router()

// Middleware for authentication
const autheticate = ((req, res, next) => {
  if (req.headers.authorization) {
    next()
  } else {
    res.status(401).send('Unauthorized')
  }
})

// Middleware for logging

