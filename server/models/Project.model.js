const mongoose = require("mongoose");


const project = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
     
    },
    
    description: {
        type: String,
        required: true,
       
    },
    status:{
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




const projectModel = mongoose.model("projects", project);

module.exports = projectModel;