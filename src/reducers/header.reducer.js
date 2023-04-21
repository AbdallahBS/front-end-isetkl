import { headerConstants } from "../actions/constans";
const initialState = {
    header : null
}
export default(state = initialState,action)=>{
    
    switch(action.type){
        
        case headerConstants.GET_HEADER_SUCCESS :
            state = {
                ...state,
                header : action.payload.header,
            }
        break;
    }
    
    return state;
}