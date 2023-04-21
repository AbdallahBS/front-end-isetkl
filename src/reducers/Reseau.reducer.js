import { ReseauConstants } from "../actions/constans";
const initialState = {
    Reseau : null
}
export default(state = initialState,action)=>{
    
    switch(action.type){
        
        case ReseauConstants.GET_RESEAU_SUCCESS :
            
            state = {
                ...state,
                Reseau : action.payload.Reseau,
            }
        break;
    }
    
    return state;
}