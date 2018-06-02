import { createAction } from 'redux-actions';
import _ from 'lodash';
import axios from 'axios';

export const fetchTasksRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchTasksSuccess = createAction('TASKS_FETCH_SUCCESS');
export const fetchTasksFailure = createAction('TASKS_FETCH_FAILURE');

export const addTaskRequest = createAction('TASK_ADD_REQUEST');
export const addTaskSuccess = createAction('TASK_ADD_SUCCESS');
export const addTaskFailure = createAction('TASK_ADD_FAILURE');

export const removeTaskRequest = createAction('TASK_REMOVE_REQUEST');
export const removeTaskSuccess = createAction('TASK_REMOVE_SUCCESS');
export const removeTaskFailure = createAction('TASK_REMOVE_FAILURE');

export const updateTaskRequest = createAction('TASK_UPDATE_REQUEST');
export const updateTaskSuccess = createAction('TASK_UPDATE_SUCCESS');
export const updateTaskFailure = createAction('TASK_UPDATE_FAILURE');

//export const removeTask = createAction('REMOVE_TASK');
//export const updateTask = createAction('UPDATE_TASK');

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

export const addTask = (values) => async (dispatch) => {
	dispatch(addTaskRequest());
	const data = {...values, state: 'active'}
	try {
		const url = 'http://localhost:8000/api/tasks';
		const response = await axios.post(url, data);
		dispatch(addTaskSuccess({ task: response.data }))
	} catch (e) {
		dispatch(addTaskFailure());
	}
	
};

export const removeTask = (id) => async (dispatch) => {
	dispatch(removeTaskRequest());
	try {
		const url = 'http://localhost:8000/api/tasks/'+id;
		const response = await axios.delete(url);
		dispatch(removeTaskSuccess({ id, }))
	} catch (e) {
		dispatch(removeTaskFailure());
	}
};

export const updateTask = ({ task }) => async (dispatch) => {
	dispatch(updateTaskRequest());
	try {
		const url = 'http://localhost:8000/api/tasks/'+task.id;
		const response = await axios.put(url, task);
		dispatch(updateTaskSuccess({ task, }))
	} catch (e) {
		dispatch(updateTaskFailure());
	}
};

