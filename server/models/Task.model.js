const mongoose = require("mongoose");


const task = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
     
    },
    
    description: {
        type: String,
        required: true,
       
    },
    projectId:{
        type: String,
        required: true, 
       
    },
    startingDate:{
        type: Date,
        required: true, 
       
    },
    endingDate:{
        type: Date,
        required: true, 
       
    },
   

   
  },
  { timestamps: true }
);




const taskModel = mongoose.model("tasks", task);

module.exports = taskModel;