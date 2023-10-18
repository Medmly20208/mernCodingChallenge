const express = require("express");
const cors = require("cors");
const projectRouter = require("./routes/projectRouter")
const taskRouter = require("./routes/taskRouter")


const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();



app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/tasks", taskRouter);

//app.use("/api/v1/blogs", blogsRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(`this route ${req.originalUrl} doesn't exist on server`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;