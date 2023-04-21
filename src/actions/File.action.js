import axios from "../helpers/axios";
import {FileConstants} from "./constans";
import FileDownload from "js-file-download";
export const getFile = form =>{
    return async dispatch =>{
        console.log('hmm',form.get('name'))
        const res = await axios.post('/getReseauFile',form);
       
        console.log(res);
        if(res.status ===200){
            const etat=res.data;
            FileDownload(etat,"Guide.pdf")
            console.log("ut is downloaded",etat)
            dispatch({
                type : FileConstants.GET_FILE_SUCCESS,
                payload : {etat : etat},
            })

        }
    }
}