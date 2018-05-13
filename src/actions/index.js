import { createAction } from 'redux-actions';
import _ from 'lodash';

export const addTask = createAction('ADD_TASK', task => 
    ({ task: { ...task, id: _.uniqueId() } }));

export const removeTask = createAction('REMOVE_TASK');

export const addComment = createAction('ADD_COMMENT', comment => 
    ({ comment: { ...comment, id: _.uniqueId() } }));

export const removeComment = createAction('REMOVE_COMMENT');

export const updateNewTaskText = createAction('NEW_TASK_TEXT_UPDATE');
