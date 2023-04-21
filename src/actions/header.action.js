import axios from "../helpers/axios";
import { headerConstants,FileConstants} from "./constans";

export const getHeader = form =>{
    return async dispatch =>{
        
        const res = await axios.get('/header/getHeader');
        console.log(res);
        if(res.status ===200){
            const header=res.data;
            console.log(header)
            dispatch({
                type : headerConstants.GET_HEADER_SUCCESS,
                payload : {header : header},
            })

        }
    }
}


