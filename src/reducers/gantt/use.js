import _ from 'lodash';

let initialState = {
    selected : []
}

const use = (state = initialState, action) => {
    let tasks;
    switch(action.type) {
        case 'SELECT_TASKS':
            tasks = action.tasks;
            return {
                ...state,
                selected : tasks
            }        
        case 'DESELECT_TASKS':
            return {
                ...state,
                selected : []
            }
        case 'DESELECT_TASK':
            tasks = state.selected
            _.remove(tasks, (t) => {
                return t.id === action.id
            })
            return{
                ...state,
                selected : tasks
            }       

        default:
            return state;

    }
}

export default use;