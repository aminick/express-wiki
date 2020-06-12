var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var browserify = require("browserify-middleware");

var indexRouter = require("./routes/index");
var pageRouter = require("./routes/page");

var app = express();

// mongoose setup
var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://admin:admin@cluster0-1y0tg.mongodb.net/roon_labs_wiki?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/javascripts/editor.js", browserify(__dirname + "/client/editor.js"));

app.use("/", indexRouter);
app.use("/page", pageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
