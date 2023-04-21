import { MathConstants } from "../actions/constans";
const initialState = {
    Math : null
}
export default(state = initialState,action)=>{
    
    switch(action.type){
        
        case MathConstants.GET_MATH_SUCCESS :
            console.log("holay")
            state = {
                ...state,
                Math : action.payload.Math,
            }
        break;
    }
    console.log("this is the ",state)
    return state;
}