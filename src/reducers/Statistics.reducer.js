import { StatisticsConstants } from "../actions/constans";
const initialState = {
    Statistics : null
}
export default(state = initialState,action)=>{
    
    switch(action.type){
        
        case StatisticsConstants.GET_STATISTICS_SUCCESS :
            console.log("holay")
            state = {
                ...state,
                Statistics : action.payload.Statistics,
            }
        break;
    }
    console.log("this is the ",state)
    return state;
}