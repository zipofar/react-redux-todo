import _ from 'lodash';
import { combineReducers  } from 'redux';

const tasks = (state = {}, action) => {
    switch (action.type) {
        case 'REMOVE_TASK':
            const id = action.payload.id;
            return _.omit(state, id);
        case 'ADD_TASK':
            const task = action.payload.task;
            return { ...state, [task.id]:task };
        default:
            return state;
    }
};

const comments = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({ tasks, comments });
