import React,{useState,useEffect} from 'react'

//style
import "./Edit.scss"
import { Button } from 'reactstrap'


//ui components
import {Alert} from 'reactstrap';

//api
import {updateProjectReducer} from '../../store/actions/projectActions'
import { useDispatch,  } from 'react-redux';

const index = ({onClose,id,data}) => {

    

    const [label,setLabel] = useState(data[0].label)
    const [description,setDescription] = useState(data[0].description)
    const [status,setStatus] = useState(data[0].status)
    const [startingDate,setStartingdate] = useState(data[0].startingDate.slice(0,10))
    const [endingDate,setEndingDate] = useState(data[0].endingDate.slice(0,10))
    const dispatch = useDispatch();
    const [error,setError] = useState(null)

    const update = ()=>{
        setError(null)
        if(label.trim()==="" || description.trim()==="" ||status.trim()==="" ||startingDate.trim()==="" ||endingDate.trim()===""  ){
           setError("please fill all fields")
           return;
        }
        dispatch(updateProjectReducer({id,label,description,status,startingDate,endingDate}));
        onClose()
    }

    
  return (
    <div className='editProject'>
        <h5>update project</h5>
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
    <Button className='activeButton' onClick={update}>Save</Button>
</div>
</form>

    </div>
   
  )
}

export default index