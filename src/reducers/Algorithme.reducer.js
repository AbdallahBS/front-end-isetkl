import { AlgorithmeConstants } from "../actions/constans";
const initialState = {
    Algorithme : null
}
export default(state = initialState,action)=>{
    
    switch(action.type){
        
        case AlgorithmeConstants.GET_ALGORITHME_SUCCESS :
            console.log("holay")
            state = {
                ...state,
                Algorithme : action.payload.Algorithme,
            }
        break;
    }
    console.log("this is the ",state)
    return state;
}