import { FileConstants } from "../actions/constans";
const initialState = {
    etat : null
}
export default(state = initialState,action)=>{
    
    switch(action.type){
        
        case FileConstants.GET_FILE_SUCCESS :
            state = {
                ...state,
                etat : action.payload.etat,
            }
        break;
    }
    
    return state;
}