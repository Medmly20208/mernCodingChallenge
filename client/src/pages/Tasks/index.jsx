import React,{useState,useEffect, Fragment} from 'react'

//ui-components
import {Button,Table} from "reactstrap"

//components
import Modal from '../../components/Modal'
import Newtask from "../../components/NewTask"
import DeleteItem from "../../components/DeleteItem"
import EditTask from "../../components/EditTask"
import EditProject from "../../components/EditProject"

//icons
import { Icon } from '@iconify/react';

//api
import {getAllTasksReducer,deleteTaskReducer} from '../../store/actions/taskActions'
import {getAllProjectsReducer} from '../../store/actions/projectActions'
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
  
  const [isModalDisplayed,setIsModalDisplayed] = useState(false)
  const [isDeleteModalDisplayed,setIsDeleteModalDisplayed] = useState(false)
  const [isUpdateModalDisplayed,setIsUpdateModalDisplayed] = useState(false)
  const [selectedId,setSelectedId] = useState()
  
  const dispatch = useDispatch();
  const { tasks,isLoading } = useSelector((state) => state.tasks);
  const { projects,isLoading:isLoadingProjects } = useSelector((state) => state.projects);
 
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
    getAllProjectsReducer
    dispatch(getAllProjectsReducer())
    dispatch(getAllTasksReducer());
  }, [dispatch]);

 


 
 
 
  return (
    <div>
        <div className='containerTop'>
            <Button className='Button' onClick={openModal}>
                + New Task
            </Button>
        </div>
        {isModalDisplayed && <Modal onClose={closeModal}><Newtask onClose={closeModal}/></Modal>}
        {isDeleteModalDisplayed && <Modal onClose={closeDeleteModal}><DeleteItem deleteReducer={deleteTaskReducer} id={selectedId} onClose={closeDeleteModal}/></Modal>}
        {isUpdateModalDisplayed && <Modal onClose={closeUpdateModal}><EditTask data={tasks.filter((task)=>task._id===selectedId)} id={selectedId} onClose={closeUpdateModal}/></Modal>}

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
        project
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
    
    {!isLoading && tasks.map((task)=>{
      return  <tr key={task._id} >
      <th scope="row">
        {task.label}
      </th>
      <td>
       {task.description}
      </td>
      <td>
      {projects?.filter((project)=>{
      
        return project._id===task.projectId
      })[0]?.label}
      </td>
      <td>
      {task.startingDate.slice(0,10)}
      </td>
      <td>
      {task.endingDate.slice(0,10)}
      </td>
      <td >
       <p className='createdAt'> {task.createdAt.slice(0,10)}</p>
      </td> 
      <td >
        <p className='updatedAt'>{task.updatedAt.slice(0,10)}</p>
      </td>
      <td>
      <Icon icon="material-symbols:edit" onClick={()=>openUpdateModal(task._id)} style={{cursor:"pointer",color:"#6C2BAD"}}/>
      <Icon icon="material-symbols:delete" onClick={()=>openDeleteModal(task._id)} style={{cursor:"pointer",color:"#6C2BAD"}} />

      </td>
     
    </tr>
     
     
    })}
   
   
  </tbody>
</Table>
    </div>
  )
}

export default index