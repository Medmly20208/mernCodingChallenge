import React from 'react'

//ui-components
import { Button } from 'reactstrap'

//style
import "./Delete.scss"


//api
import { useDispatch, useSelector } from 'react-redux';

const index = ({id,onClose,deleteReducer}) => {
  
const dispatch = useDispatch()
  const deleteHandler= ()=>{
    dispatch(deleteReducer({id}));
    onClose()
  }


  return (
    <div className='deleteContainer'>
        <h5>Are you sure want to delete this item?</h5>
        <div className='actions'>
            <Button className='Button' onClick={onClose}>Cancel</Button>
            <Button className='activeButton' onClick={deleteHandler}>Delete</Button>
        </div>
    </div>
  )
}

export default index