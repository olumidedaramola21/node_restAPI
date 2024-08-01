const express = require('express')
const router = express.Router()

// Middleware for authentication
const autheticate = ((req, res, next) => {
  if (req.headers.authorization) {
    next()
  } else {
    res.status(401).send('Unauthorized')
  }
})

// Middleware for logging
const logRoute = (req, res, next) {
  console.log(`Request to ${req.url}`)
  next()
}

// Apply middleware to specifc route
router.get('/secure-data', autheticate, logRoute, (req, res) => {
  res.json({data: 'This is a secure data'})
})

router.get('/public-data', logRoute, (req, res) => {
  res.json({data: 'This is a secure data'})
})
