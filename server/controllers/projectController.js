const projectModel = require("../models/Project.model");
const catchAsync = require("../utils/catchAsync");

//create project
exports.CreateProject = catchAsync(async (req, res) => {
  const project = await projectModel.create({ ...req.body });

  res.status(200).json({
    status: "success",
    data: project,
  });
});

//get project by id
exports.GetProjectById = catchAsync(async (req, res) => {
    const project = await projectModel.findById(req.params.id);
  
    res.status(200).json({
      status: "success",
      message: project,
    });
  });
  

//delete project by id
exports.DeleteProjectById = catchAsync(async (req, res) => {
  const project = await projectModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "deleted successfully",
  });
});

//update project by id
exports.UpdateProjecteById = catchAsync(async (req, res) => {
  const project = await projectModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({
    status: "success",
    message: project,
  });
});

//get all projects 
exports.getAllProjects = catchAsync(async (req, res) => {
 

  const project = await projectModel.find();

  res.status(200).json({
    status: "success",
    data: project,
  });
});


