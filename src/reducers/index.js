import _ from 'lodash';
import { combineReducers  } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/';

const tasks = handleActions({
    [actions.addTask](state, { payload: { task } }) {
        return { ...state, [task.id]: task };
    },
    [actions.removeTask](state, { payload: { id } }) {
        return _.omit(state, id);
    },
}, {});

const newTaskText = handleActions({
    [actions.updateNewTaskText](state, { payload: { text } }) {
        return text;
    },
    [actions.addTask]() {
        return '';
    },    
}, '');

const comments = handleActions({
    [actions.addComment](state, { payload: { comment } }) {
        return { ...state, [comment.id]: comment };
    },
    [actions.removeComment](state, { payload: { id } }) {
        return _.omit(state, id);
    },
    [actions.removeTask](state, { payload: { id } }) {
        return _.omitBy(state, ({ taskId }) => taskId === id);
    },
}, {});

export default combineReducers({ tasks, comments, newTaskText });
