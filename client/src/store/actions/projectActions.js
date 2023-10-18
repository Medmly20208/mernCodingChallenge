import {GET_PROJECTS, USERS_ERROR,CREATE_PROJECT,DELETE_PROJECT,UPDATE_PROJECT} from '../types'
import { getAllProjects ,createAproject,deleteProjectById,updateAprojectById} from '../../api'

export const getAllProjectsReducer = () => async dispatch => {
    
    try{
        const res = await getAllProjects()
        
        dispatch( {
            type: GET_PROJECTS,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}


export const createProjectReducer = (data) => async dispatch => {
    
    try{
        const res = await createAproject(data)
        
        dispatch( {
            type: CREATE_PROJECT,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}


export const deleteProjectReducer = (data) => async dispatch => {
    
    try{
        const res = await deleteProjectById(data)
        
        dispatch( {
            type: DELETE_PROJECT,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const updateProjectReducer = (data) => async dispatch => {
    
    try{
        const res = await updateAprojectById(data)
        
        dispatch( {
            type: UPDATE_PROJECT,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}