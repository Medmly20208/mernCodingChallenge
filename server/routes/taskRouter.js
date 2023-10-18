const express = require("express");
const taskController = require("../controllers/tasksController");

const Router = express.Router();

Router.post("/", taskController.CreateTask);

Router.get("/", taskController.getAllTasks);

Router.put("/:id", taskController.UpdateTaskById);

Router.delete("/:id", taskController.DeleteTaskById);

Router.get("/:id", taskController.GetTaskById);

module.exports = Router;