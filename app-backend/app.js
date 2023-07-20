const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const relate = require("./db/relate");
const passport = require("passport");
const cors = require("cors");
const categoryRouter = require("./routes/category");
const ingredientRouter = require("./routes/ingredient");
const glassRouter = require("./routes/glass");
const drinkRouter = require("./routes/drink");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const commentRouter = require("./routes/comment");
const nutritionalContentRouter = require("./routes/nutritionalContent");
const { constants } = require("http2");
relate();
// require("./puppeteer/index");
const app = express();
const swaggerUi = require("swagger-ui-express");
const openapiSpecification = require("./services/swagger");
const main = require("./services/nodemailer");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRETE,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/drink", drinkRouter);
app.use("/category", categoryRouter);
app.use("/glass", glassRouter);
app.use("/ingredient", ingredientRouter);
app.use("/comment", commentRouter);
app.use("/nutrition", nutritionalContentRouter);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// sendEmail
// main().catch((err) => console.log(err));

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
