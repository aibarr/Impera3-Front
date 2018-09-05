export const addTask = (name, startDate, endDate) => {
    return {
        type: 'ADD_TASK',
        name,
        startDate,
        endDate
    }
}

export const delTask = (id) => {
    return {
        type:   'DELETE_TASK',
        id
    }
}

export const editTask = (id, name, startDate, endDate) => {
    return {
        type:   'EDIT_TASK',
        id,
        name,
        startDate,
        endDate
    }
}

export const loadProject = () => {
    return {
        type: 'LOAD_PROJECT'
    }
}

export const loadProjectSuccess = () => {
    return {
        type: 'LOAD_PROJECT_SUCCESS'
    }
}

export const selectTasks = (tasks) => {
    return {
        type: 'SELECT_TASKS',
        tasks
    }
}

export const deselectTasks = () => {
    return {
        type: 'DESELECT_TASKS'
    }
}

export const deselectTask = (id) => {
    return {
        type: 'DESELECT_TASK',
        id
    }

}