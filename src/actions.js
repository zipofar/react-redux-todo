export const addTask = (task) => ({
    type: 'ADD_TASK', 
    payload: {
        task,
    },
});

export const removeTask = id => ({
    type: 'REMOVE_TASK',
    payload: {
        id,
    },
});

export const addComment = comment => ({
    type: 'ADD_COMMENT',
    payload: {
        comment,
    },
});

export const removeComment = id => ({
    type: 'REMOVE_COMMENT',
    payload: {
        id,
    },
});
