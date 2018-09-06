export const setBL = (projectID, tasks) => {
    return {
        type:   'SET_BL',
        projectID,
        tasks
    }
}

export const editBL = (projectID, baselineID, tasks) => {
    return {
        type:   'EDIT_BL',
        projectID,
        baselineID,
        tasks
    }
}

export const desetBL = (projectID, baselineID, tasks ) => {
    return {
        type:   'UNSET_BL',
        projectID,
        baselineID,
        tasks
    }
}

