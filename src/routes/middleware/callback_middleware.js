
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
