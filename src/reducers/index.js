import _ from 'lodash';
import { combineReducers  } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/';
import { reducer as formReducer } from 'redux-form';

const tasks = handleActions({
    [actions.addTask](state, { payload: { task } }) {
        return { ...state, [task.id]: task };
    },
    [actions.removeTask](state, { payload: { id } }) {
        return _.omit(state, id);
    },
    [actions.toggleTaskState](state, { payload: { id } }) {
        const newTasks = { ...state };
        newTasks[id].state = newTasks[id].state === 'active' ? 'finished' : 'active';
        return newTasks;
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

const

export default combineReducers({ tasks, newTaskText, form: formReducer });
