import _ from 'lodash';
import { combineReducers  } from 'redux';

const tasks = (state = {}, action) => {
    switch (action.type) {
        case 'REMOVE_TASK':
            const { id } = action.payload;
            return _.omit(state, id);
        case 'ADD_TASK':
            const { task } = action.payload;
            return { ...state, [task.id]:task };
        default:
            return state;
    }
};

const comments = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            const { comment } = action.payload;
            return { ...state, [comment.id]: comment };
        case 'REMOVE_COMMENT':
            const { id } = action.payload;
            return _.omit(state, id);
        case 'REMOVE_TASK':
            const taskId = action.payload.id;
            return _.omitBy(state, comment => comment.taskId === taskId);
        default:
            return state;
    }
};

export default combineReducers({ tasks, comments });
