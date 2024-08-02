const express = require("express");
const userRouter = require("./routes/userRoutes");
const pageRouter = require("./routes/pageRoutes")
const path = require('node:path')
const app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// Application level middleware, will always execute on every incoming requests

// parses from payloads and sets it to the `req.body`
app.use(express.urlencoded({extended: false}))

app.use("/", (req, res, next) => {
  // 
  next();
});

// base mount path is `|users` and will always execute on that specific mount path 
app.use('/users', userRouter)
app.use('/page', pageRouter)

// Error-handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500).send("err.message");
});

const port = 3000;
app.listen(port, () => {
  console.log("Listening on port 3000");
});
