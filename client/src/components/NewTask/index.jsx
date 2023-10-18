import React,{useState,useEffect} from 'react'

//style
import "./NewTask.scss"
import { Button } from 'reactstrap'


//ui components
import {Alert} from 'reactstrap';

//api
import { createtaskReducer } from '../../store/actions/taskActions';
import { useDispatch, useSelector } from 'react-redux';

const index = ({onClose}) => {

    const [label,setLabel] = useState("")
    const [description,setDescription] = useState("")
    const [projectId,setProjectid] = useState("")
    const [startingDate,setStartingdate] = useState("")
    const [endingDate,setEndingDate] = useState("")
    const dispatch = useDispatch();
    const [error,setError] = useState(null)
    const projects = useSelector((state)=>state.projects.projects)

   

    const createTask = ()=>{
        setError(null)
        if(label.trim()==="" || description.trim()==="" ||projectId.trim()==="" ||startingDate.trim()==="" ||endingDate.trim()===""  ){
           setError("please fill all fields")
           return;
        }
        dispatch(createtaskReducer({label,description,projectId,startingDate,endingDate}));
        onClose()
    }

    console.log(projectId)
    
  return (
    <div className='newTask'>
        <h5>Add new Task</h5>
        <p>Fill your project attributes</p>
 <form>
 {error &&   <Alert color="danger">
    *{error}
  </Alert>}
<div>
    <label>Label*:</label><br></br>
    <input value={label} onChange={(e)=>setLabel(e.target.value)} type="text" placeholder='Write a label'/>
</div>
<div>
    <label>Description*:</label><br></br>
    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} rows={5} placeholder='Write a description'/>
</div>
<div>
    <label>project*:</label><br></br>
    <select value={projectId}  onChange={(e)=>setProjectid(e.target.value)}>
       <option value=""  disabled hidden>Choose here</option>
        {projects.map((project,index)=>{
            return <option  key={project._id} value={project._id}>{project.label}</option>
        })}
    </select>
</div>
<div>
    <label>Start Date*:</label><br></br>
    <input value={startingDate} onChange={(e)=>setStartingdate(e.target.value)} type='date'/>
</div>
<div>
    <label>End Date*:</label><br></br>
    <input type='date' value={endingDate} onChange={(e)=>setEndingDate(e.target.value)}/>
</div>
<div className='actions'>
    <Button className='Button' onClick={onClose}>Cancel</Button>
    <Button className='activeButton' onClick={createTask}>Save</Button>
</div>
</form>

    </div>
   
  )
}

export default index