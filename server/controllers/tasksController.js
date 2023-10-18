const taskModel = require("../models/Task.model");
const catchAsync = require("../utils/catchAsync");

//create task
exports.CreateTask = catchAsync(async (req, res) => {
  const task = await taskModel.create({ ...req.body });

  res.status(200).json({
    status: "success",
    data: task,
  });
});

//get task by id
exports.GetTaskById = catchAsync(async (req, res) => {
    const task = await taskModel.findById(req.params.id);
  
    res.status(200).json({
      status: "success",
      message: task,
    });
  });
  

//delete task by id
exports.DeleteTaskById = catchAsync(async (req, res) => {
  const task = await taskModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "deleted successfully",
  });
});

//update task by id
exports.UpdateTaskById = catchAsync(async (req, res) => {
  const project = await taskModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({
    status: "success",
    message: project,
  });
});

//get all tasks 
exports.getAllTasks = catchAsync(async (req, res) => {
 

  const task = await taskModel.find();

  res.status(200).json({
    status: "success",
    data: task,
  });
});


