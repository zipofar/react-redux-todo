import { createAction } from 'redux-actions';
import _ from 'lodash';
import axios from 'axios';

export const fetchTasksRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchTasksSuccess = createAction('TASKS_FETCH_SUCCESS');
export const fetchTasksFailure = createAction('TASKS_FETCH_FAILURE');

export const addTask = createAction('ADD_TASK', task => 
    ({ task: { ...task, id: _.uniqueId(), state: 'active' } }));
export const removeTask = createAction('REMOVE_TASK');
export const updateTask = createAction('UPDATE_TASK');

export const loadTask = createAction('LOAD_TASK');
export const toggleTaskState = createAction('TOGGLE_TASK_STATE');

export const toggleModalTaskUpdate = createAction('TOGGLE_MODAL_TASK_UPDATE');

export const fetchTasks = () => async (dispatch) => {
	dispatch(fetchTasksRequest());
	try {
		const url = 'http://localhost:8000/api/tasks';
		const response = await axios.get(url);
		const tasks = response.data.reduce((acc, task) => {
			return {...acc, [task.id]:task}
		}, {});

		dispatch(fetchTasksSuccess({ tasks, }))
	} catch (e) {
		dispatch(fetchTasksFailure());
	}
};

