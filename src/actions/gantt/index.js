const addTask = (name, startDate, endDate) => {
    return {
        type: 'ADD_TASK',
        name,
        startDate,
        endDate
    }
}

const delTask = (id) => {
    return {
        type:   'DELETE_TASK',
        id
    }
}

const editTask = (id, name, startDate, endDate) => {
    return {
        type:   'EDIT_TASK',
        id,
        name,
        startDate,
        endDate
    }
}

const loadProject = () => {
    return {
        type: 'LOAD_PROJECT'
    }
}

const loadProjectSuccess = () => {
    return {
        type: 'LOAD_PROJECT_SUCCESS'
    }
}