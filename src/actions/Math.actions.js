import axios from "../helpers/axios";
import { MathConstants} from "./constans";
import { FileConstants } from "./constans";
import { MathFilesConstants } from "./constans";
import FileDownload from "js-file-download";
export const getMath = form =>{
    return async dispatch =>{
        console.log("hilooo");
        const res = await axios.get('/math/getMath');
        console.log("hilooo",res);
        if(res.status ===200){
            const Math=res.data;
            console.log("holaiiii",Math)
            dispatch({
                type : MathConstants.GET_MATH_SUCCESS,
                payload : {Math : Math},
            })

        }
    }
}
export const getAllMathFiles = form =>{
    return async dispatch =>{
        const res = await axios.get('/getAllMathFiles');
        console.log("hilooo",res);
        if(res.status ===200){
            const Files=res.data;
            
            dispatch({
                type : MathFilesConstants.GET_MATH_FILES_SUCCESS,
                payload : {Files : Files},
            })

        }
    }
}

export const getMathFile = form =>{
    return async dispatch =>{
        console.log('hmm',form.get('name'))
        const res = await axios.post('/getMathFile',form);
       
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