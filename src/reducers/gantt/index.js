import { combineReducers } from 'redux';
import data from './data'
import config from './config'


const gantt = combineReducers({data, config});

export default gantt;

