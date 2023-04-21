import { MathFilesConstants } from "../actions/constans";
const initialState = {
    Files : null
}
export default(state = initialState,action)=>{
    switch(action.type){
        case MathFilesConstants.GET_MATH_FILES_SUCCESS :
            state = {
                ...state,
                Files : action.payload.Files,
            }
        break;
    }
    console.log("this is the ",state)
    return state;
}