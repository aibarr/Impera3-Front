import { combineReducers } from 'redux';
import gantt from './gantt'
import projects from './project'


const imperaApp = combineReducers({gantt, projects});

export default imperaApp;