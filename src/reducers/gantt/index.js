import { combineReducers } from 'redux';
import data from './data'
import config from './config'
import use from './use'

const gantt = combineReducers({data, config, use});

export default gantt;

