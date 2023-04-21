import axios from "../helpers/axios";
import { ReseauConstants,ReseauFilesConstants} from "./constans";

export const getReseau = form =>{
    return async dispatch =>{
        
        const res = await axios.get('/reseau/getReseau');
        
        if(res.status ===200){
            const Reseau=res.data;
            
            dispatch({
                type : ReseauConstants.GET_RESEAU_SUCCESS,
                payload : {Reseau : Reseau},
            })

        }
    }
}
export const getAllReseauFiles = form =>{
    return async dispatch =>{
        const res = await axios.get('/getAllReseauFiles');
        if(res.status ===200){
            const Files=res.data;
            dispatch({
                type : ReseauFilesConstants.GET_RESEAU_FILES_SUCCESS,
                payload : {Files : Files},
            })

        }
    }
}