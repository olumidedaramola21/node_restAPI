const express = require("express");
const middleware = require("./routes/middleware/middleware");

// Application level middleware
const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("the response will be sent by the next function");
    next();
  },
  (req, res) => {
    res.send("Hello World!")
  }
);

// An Array of Callbacks
const cb0 = function (req, res, next) {
  console.log("cb1");
  next();
};

const cb1 = function (req, res, next) {
  console.log("cb2");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/message/c", [cb0, cb1, cb2]);

app.use("/middleware", middleware);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});

class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404
    this.name = 'NotFoundError'
  }
}

const port = 3000;
app.listen(port, () => {
  console.log("Listening on port 3000");
});
