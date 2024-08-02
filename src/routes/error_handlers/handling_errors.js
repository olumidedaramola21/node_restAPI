const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  // Express can catch synchronous errors by it self
  throw new Error('Broken') 
})

// For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next(function), where express will catch and process them example
router.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // pass error to express
    } else {
      res.send(data)
    }
  })
})

// Errors that occur in asynchromous code invoked by route handlers or middleware are passed to express for processing
router.get('/', (req, res, next) => {

})
