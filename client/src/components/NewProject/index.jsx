import React,{useState,useEffect} from 'react'

//style
import "./NewProject.scss"
import { Button } from 'reactstrap'

//ui components
import {Alert} from 'reactstrap';

//api
import {createProjectReducer} from '../../store/actions/projectActions'
import { useDispatch, useSelector } from 'react-redux';

//components
import SuccessMessage from "../SuccessMessage"
import Modal from "../Modal";

const index = ({onClose}) => {

    const [label,setLabel] = useState("")
    const [description,setDescription] = useState("")
    const [status,setStatus] = useState("")
    const [startingDate,setStartingdate] = useState("")
    const [endingDate,setEndingDate] = useState("")
    const [isSuccessMessageDisplayed,setisSuccessMessageDisplayed] = useState(false)

   const openSuccessMessage = ()=>setisSuccessMessageDisplayed(true)
   const closeSuccessMessage = ()=>setisSuccessMessageDisplayed(false)

console.log(isSuccessMessageDisplayed)
    const dispatch = useDispatch();
    const [error,setError] = useState(null)

    const createProject = ()=>{
        setError(null)
        if(label.trim()==="" || description.trim()==="" ||status.trim()==="" ||startingDate.trim()==="" ||endingDate.trim()===""  ){
           setError("please fill all fields")
           return;
        }
        dispatch(createProjectReducer({label,description,status,startingDate,endingDate}));
        openSuccessMessage()
        console.log("ded",isSuccessMessageDisplayed)

        onClose()
        
    }

    
  return (
    <div className='newProject'>
        {isSuccessMessageDisplayed && <Modal onClose={closeSuccessMessage}><SuccessMessage message={"project added successfully"}/></Modal>}
        <h5>Add new project</h5>
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
    <label>Status*:</label><br></br>
    <input value={status} onChange={(e)=>setStatus(e.target.value)} type="text" placeholder='Write a status'/>
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
    <Button className='activeButton' onClick={createProject}>Save</Button>
</div>
</form>

    </div>
   
  )
}

export default index