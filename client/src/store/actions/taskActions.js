import {GET_TASKS, USERS_ERROR,CREATE_TASKS,DELETE_TASKS,UPDATE_TASKS} from '../types'
import { getAllTasks ,createAtask,deletetaskById,updateAtaskById, } from '../../api'

export const getAllTasksReducer = () => async dispatch => {
    
    try{
        const res = await getAllTasks()
        
        dispatch( {
            type: GET_TASKS,
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


export const createtaskReducer = (data) => async dispatch => {
    
    try{
        const res = await createAtask(data)
        
        dispatch( {
            type: CREATE_TASKS,
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


export const deleteTaskReducer = (data) => async dispatch => {
    
    try{
        const res = await deletetaskById(data)
        
        dispatch( {
            type: DELETE_TASKS,
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

export const updateTaskReducer = (data) => async dispatch => {
    
    try{
        const res = await updateAtaskById(data)
        
        dispatch( {
            type: UPDATE_TASKS,
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