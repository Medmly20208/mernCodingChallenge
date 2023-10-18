import React,{useState,useEffect, Fragment} from 'react'

//ui-components
import {Button,Table} from "reactstrap"

//components
import Modal from '../../components/Modal'
import NewProject from "../../components/NewProject"
import DeleteItem from "../../components/DeleteItem"
import EditProject from "../../components/EditProject"

//icons
import { Icon } from '@iconify/react';

//api
import {getAllProjectsReducer,deleteProjectReducer} from '../../store/actions/projectActions'

import { useDispatch, useSelector } from 'react-redux';

const index = () => {
  
  const [isModalDisplayed,setIsModalDisplayed] = useState(false)
  const [isDeleteModalDisplayed,setIsDeleteModalDisplayed] = useState(false)
  const [isUpdateModalDisplayed,setIsUpdateModalDisplayed] = useState(false)
  const [selectedId,setSelectedId] = useState()
  
  const dispatch = useDispatch();
  const { projects,isLoading } = useSelector((state) => state.projects);
 
  const openModal = ()=>setIsModalDisplayed(true)
  const closeModal = ()=>setIsModalDisplayed(false)

  const openDeleteModal = (id)=>{
    setSelectedId(id)
    setIsDeleteModalDisplayed(true)
  }
  const closeDeleteModal = ()=>setIsDeleteModalDisplayed(false)

  const openUpdateModal = (id)=>{
    setSelectedId(id)
    setIsUpdateModalDisplayed(true)
  }
  const closeUpdateModal = ()=>setIsUpdateModalDisplayed(false)

  useEffect(() => {
    dispatch(getAllProjectsReducer());
  }, [dispatch]);

 
  return (
    <div>
        <div className='containerTop'>
            <Button className='Button' onClick={openModal}>
                + New Project
            </Button>
        </div>
        {isModalDisplayed && <Modal onClose={closeModal}><NewProject onClose={closeModal}/></Modal>}
        {isDeleteModalDisplayed && <Modal onClose={closeDeleteModal}><DeleteItem deleteReducer={deleteProjectReducer} id={selectedId} onClose={closeDeleteModal}/></Modal>}
        {isUpdateModalDisplayed && <Modal onClose={closeUpdateModal}><EditProject data={projects.filter((project)=>project._id===selectedId)} id={selectedId} onClose={closeUpdateModal}/></Modal>}

        <Table borderless className='customizedTable'>
  <thead>
    <tr>
      <th>
        label
      </th>
      <th>
        description
      </th>
      <th>
        status
      </th>
      <th>
        starting_date
      </th>
      <th>
        ending_date
      </th>
      <th>
        created_At
      </th>
      <th>
        Updated_At
      </th>
      <th>
        actions
      </th>
    </tr>
  </thead>
  {isLoading && <p>isLoading...</p>}
  <tbody>
    
    {!isLoading && projects.map((project)=>{
      return  <tr key={project._id} >
      <th scope="row">
        {project.label}
      </th>
      <td>
       {project.description}
      </td>
      <td>
      {project.status}
      </td>
      <td>
      {project.startingDate.slice(0,10)}
      </td>
      <td>
      {project.endingDate.slice(0,10)}
      </td>
      <td >
       <p className='createdAt'> {project.createdAt.slice(0,10)}</p>
      </td> 
      <td >
        <p className='updatedAt'>{project.updatedAt.slice(0,10)}</p>
      </td>
      <td>
      <Icon icon="material-symbols:edit" onClick={()=>openUpdateModal(project._id)} style={{cursor:"pointer",color:"#6C2BAD"}}/>
      <Icon icon="material-symbols:delete" onClick={()=>openDeleteModal(project._id)} style={{cursor:"pointer",color:"#6C2BAD"}} />

      </td>
     
    </tr>
     
     
    })}
   
   
  </tbody>
</Table>
    </div>
  )
}

export default index