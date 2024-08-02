// route File - routes/userRoutes.js
const express = require('express')
const userControllers = require('../controllers/userControllers')

const router = express.Router()
// Top level middleware function for authetication could be added to ensure the user is autheticated before request can come in
// This prevents the execution of middleware function below if they are not autheticated.
// Authetication level will be added on later

// route.use(authMiddleware)

// router-level middleware

// Get request for getting all users
router.get('/', userControllers.getUsers);

// post request for creating a user
router.post('/', userControllers.createUsers);

// Get request for getting the user by id
router.get('/:id', userControllers.getUserById);

module.exports = router 
