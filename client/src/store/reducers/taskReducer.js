import {GET_TASKS,CREATE_TASKS,DELETE_TASKS,UPDATE_TASKS} from '../types'

const initialState = {
    tasks:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_TASKS:
        return {
            ...state,
            tasks:action.payload,
            loading:false

        }
        case CREATE_TASKS:
            return {
                ...state,
                
                loading:false
    
            }
            case UPDATE_TASKS:
                return {
                    ...state,
                    
                    loading:false
        
                }
            case DELETE_TASKS:
                return {
                    ...state,
                    
                    loading:false
        
                }
        default: return state
    }
}