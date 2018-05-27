import { createAction } from 'redux-actions';
import _ from 'lodash';

export const addTask = createAction('ADD_TASK', task => 
    ({ task: { ...task, id: _.uniqueId(), state: 'active' } }));
export const removeTask = createAction('REMOVE_TASK');
export const updateTask = createAction('UPDATE_TASK');

export const loadTask = createAction('LOAD_TASK');
export const toggleTaskState = createAction('TOGGLE_TASK_STATE');

export const toggleModalTaskUpdate = createAction('TOGGLE_MODAL_TASK_UPDATE');
