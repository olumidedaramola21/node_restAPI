const express = require('express')
const router = express.Router()

const getUserById = async (req, res) => {
  const userId = req.params.id
  try {
    const user = await someQueryToDB(userId)

    if (!user) {
      res.status(404).send('User not found')
      return;
    }
  
    res.send(`User found: ${user.name}`)
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).send("Internal Server Error");
  }

}
