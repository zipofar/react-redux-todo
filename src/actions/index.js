import { createAction } from 'redux-actions';
import _ from 'lodash';

export const addTask = createAction('ADD_TASK', task => 
    ({ task: { ...task, id: _.uniqueId(), state: 'active' } }));
export const removeTask = createAction('REMOVE_TASK');
export const updateNewTaskText = createAction('NEW_TASK_TEXT_UPDATE');
