import authReducer from './auth.reducers';
import { combineReducers } from 'redux' ;
import headerReducer from './header.reducer';
import ReseauReducer from './Reseau.reducer';
import fileReducer from './File.Reducer';
import MathReducer from './Math.reducer';
import AlgorithmeReducer from './Algorithme.reducer';
import StatisticsReducer from './Statistics.reducer';
import File_ReseauReducer from './File_Math.reducer';
import File_AlgorithmeReducer from './File_Algorithme.reducer';
import File_MathReducer from './File_Math.reducer';
import File_StatisticsReducer from './File_Statistics.reducer';
const rootReducer = combineReducers ({
    auth : authReducer,
    etat : fileReducer,
    header : headerReducer,
    Reseau : ReseauReducer,
    Math : MathReducer,
    Algorithme : AlgorithmeReducer,
    Statistics : StatisticsReducer,
    File_Reseau :File_ReseauReducer,
    File_Math : File_MathReducer,
    File_Algorithme : File_AlgorithmeReducer,
    File_Statistics : File_StatisticsReducer


}); 
export default rootReducer;