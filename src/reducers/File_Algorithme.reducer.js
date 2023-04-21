import { AlgorithmeFilesConstants } from "../actions/constans";
const initialState = {
    Files : null
}
export default(state = initialState,action)=>{
    switch(action.type){
        case AlgorithmeFilesConstants.GET_ALGORITHME_FILES_SUCCESS :
            state = {
                ...state,
                Files : action.payload.Files,
            }
        break;
    }
    console.log("this is the ",state)
    return state;
}