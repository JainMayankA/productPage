import dataReducer from './data_sales';
import sortingReducer from './sorting';
import {combineReducers} from 'redux';


const allReducer = combineReducers({
    findData: dataReducer,
    sortData: sortingReducer 
})

export default allReducer;