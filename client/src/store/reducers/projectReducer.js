import {GET_PROJECTS,CREATE_PROJECT,DELETE_PROJECT,UPDATE_PROJECT} from '../types'

const initialState = {
    projects:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_PROJECTS:
        return {
            ...state,
            projects:action.payload,
            loading:false

        }
        case CREATE_PROJECT:
            return {
                ...state,
                
                loading:false
    
            }
            case UPDATE_PROJECT:
                return {
                    ...state,
                    
                    loading:false
        
                }
            case DELETE_PROJECT:
                return {
                    ...state,
                    
                    loading:false
        
                }
        default: return state
    }
}