const express = require("express");
const userRouter = require("./routes/userRoutes");
const middleware = require("./routes/middleware/middleware");

const app = express();

// Application level middleware, will always execute on every incoming requests

// parses from payloads and sets it to the `req.body`
app.use(express.urlencoded({extended: false}))

app.use("/", (req, res, next) => {
  // 
  next();
});

// base mount path is `|users` and will always execute on that specific mount path 
app.use('/users', userRouter)

// Error-handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500).send("err.message");
});

const port = 3000;
app.listen(port, () => {
  console.log("Listening on port 3000");
});
