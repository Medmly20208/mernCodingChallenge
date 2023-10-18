const express = require("express");
const projectContoller = require("../controllers/projectController");

const Router = express.Router();

Router.post("/", projectContoller.CreateProject);

Router.get("/", projectContoller.getAllProjects);

Router.put("/:id", projectContoller.UpdateProjecteById);

Router.delete("/:id", projectContoller.DeleteProjectById);

Router.get("/:id", projectContoller.GetProjectById);

module.exports = Router;