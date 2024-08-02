const asyncHandler = require('express-async-handler')
const {
  CustomNotFoundError,
  CustomBadRequestError,
  CustomUnauthorizedError,
  CustomForbiddenError,
  CustomInternalServerError,
} = require('../routes/error_handlers/errors')

// Any errors that is thrown in  this function will automatically be caught and call the `next` function.
const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id
    const user = await someQueryToDB(userId)
    if (!user) {
      throw new CustomNotFoundError('User not found');
    }
    res.send(`User found: ${user.name}`)
});

const getUsers = asyncHandler(async (req, res) => {
  // Code
})

const createUsers = asyncHandler(async (req, res) => {
  // Code
})

module.exports = {
  getUserById,
  getUsers,
  createUsers,
} 
