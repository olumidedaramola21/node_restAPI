const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/:username/messages', (req, res) => {
  console.log(req.params);
  res.end();
})

app.post('/message', (req, res) => {
  res.send('This is the message created')
})

const port = 3000
app.listen(port, () => {
  console.log('Listening on port 3000')
})
