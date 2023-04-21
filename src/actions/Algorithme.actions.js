import axios from "../helpers/axios";
import { AlgorithmeConstants,FileConstants,AlgorithmeFilesConstants} from "./constans";
import FileDownload from "js-file-download";
export const getAlgorithme = form =>{
    return async dispatch =>{
        console.log("hilooo");
        const res = await axios.get('/algorithme/getAlgorithme');
        console.log("hilooo",res);
        if(res.status ===200){
            const Algorithme=res.data;
            console.log("holaiiii",Algorithme)
            dispatch({
                type : AlgorithmeConstants.GET_ALGORITHME_SUCCESS,
                payload : {Algorithme : Algorithme},
            })

        }
    }
}
export const getAllAlgorithmeFiles = form =>{
    return async dispatch =>{
        const res = await axios.get('/getAllAlgorithmeFiles');
        if(res.status ===200){
            const Files=res.data;
            dispatch({
                type : AlgorithmeFilesConstants.GET_ALGORITHME_FILES_SUCCESS,
                payload : {Files : Files},
            })

        }
    }
}
export const getAlgorithmeFile = form =>{
    return async dispatch =>{
        const res = await axios.post('/getAlgorithmeFile',form);
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