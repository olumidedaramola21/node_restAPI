const express = require('express')
const router = express.Router()

const getUserById = async (req, res) => {
  const userId = req.params.id

  const user = await someQueryToDB(userId)

  if (!user) {
    res.status(404).send('User not found')
    return;
  }

  res.send(`User found: ${user.name}`)
}
