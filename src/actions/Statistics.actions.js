import axios from "../helpers/axios";
import { StatisticsConstants,StatisticsFilesConstants,FileConstants} from "./constans";
import FileDownload from "js-file-download";
export const getStatistics = form =>{
    return async dispatch =>{
        console.log("hilooo");
        const res = await axios.get('/statistics/getStatistics');
        console.log("hilooo",res);
        if(res.status ===200){
            const Statistics=res.data;
            console.log("holaiiii",Statistics)
            dispatch({
                type : StatisticsConstants.GET_STATISTICS_SUCCESS,
                payload : {Statistics : Statistics},
            })

        }
    }
}
export const getAllStatisticsFiles = form =>{
    return async dispatch =>{
        const res = await axios.get('/getAllStatisticsFiles');
        if(res.status ===200){
            const Files=res.data;
            dispatch({
                type : StatisticsFilesConstants.GET_STATISTICS_FILES_SUCCESS,
                payload : {Files : Files},
            })

        }
    }
}
export const getStatisticsFile = form =>{
    return async dispatch =>{
        const res = await axios.post('/getStatisticsFile',form);
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
