const express = require('express')
// Router Level middleware
const router = express.Router()

// Middleware function that logs the request method and url
const request_logger = function (req, res, next)  {
  console.log(`${req.method} ${req.url}`);
  next()
}
router.use(request_logger)

router.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next()
})

// Route handler for HomePage
router.get('/', (req, res) => {
  res.send(`Hello, World! Request received at: ${req.requestTime}`)
});

// Route handler for ContactPage
router.get('/about', (req, res) => {
  res.send(`About Page! Request received at: ${req.requestTime}`)
})

// Ending the request-response cycle
router.use((req, res) => {
  // works and ens the cycle
  res.send('Hello');
  console.log('Hello')
  // This will no run
  res.send('Hello')

})

// Error-handling middleware
router.use((err, req, res) => {
  console.log(err.stack);
  // res.status(500).send('Something broke!')
  // res.send('Something wrong!')
})












module.exports = router
