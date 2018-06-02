import _ from 'lodash';
import { combineReducers  } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/';
import { reducer as formReducer } from 'redux-form';

const tasksFetchingState = handleActions({
	[actions.fetchTasksRequest]() {
		return 'requested';
	},
	[actions.fetchTasksSuccess]() {
		return 'successed';
	},
	[actions.fetchTasksFailure]() {
		return 'failed';
	},
}, 'none');

const taskAddingState = handleActions({
	[actions.addTaskRequest]() {
		return 'requested';
	},
	[actions.addTaskSuccess]() {
		return 'successed';
	},
	[actions.addTaskFailure]() {
		return 'failed';
	},
}, 'none');

const taskRemovingState = handleActions({
	[actions.removeTaskRequest]() {
		return 'requested';
	},
	[actions.removeTaskSuccess]() {
		return 'successed';
	},
	[actions.removeTaskFailure]() {
		return 'failed';
	},
}, 'none');

const taskUpdatingState = handleActions({
	[actions.updateTaskRequest]() {
		return 'requested';
	},
	[actions.updateTaskSuccess]() {
		return 'successed';
	},
	[actions.updateTaskFailure]() {
		return 'failed';
	},
}, 'none');



const tasks = handleActions({
		[actions.addTaskSuccess](state, { payload: { task } }) {
			return { ...state, [task.id]: task };
		},
    [actions.updateTaskSuccess](state, { payload: { task } }) {
        const tasksWithoutCurrent = _.omit(state, [task.id]);
        const currentTask = state[task.id];
        const updatedTask = { ...currentTask, ...task }
        return { ...tasksWithoutCurrent, [task.id]: updatedTask };
    },
    [actions.removeTaskSuccess](state, { payload: { id } }) {
        return _.omit(state, id);
    },
    [actions.toggleTaskState](state, { payload: { id } }) {
        const newTasks = { ...state };
        newTasks[id].state = newTasks[id].state === 'active' ? 'finished' : 'active';
        return newTasks;
    },
		[actions.fetchTasksSuccess](state, { payload: { tasks }}) {
			return tasks;
		},
}, {});

const modalTaskUpdate = handleActions({
  [actions.toggleModalTaskUpdate](state, { payload: { modalState } }) {
    return { ...modalState };
  },
}, { state: 'close' });

const loadTaskForUpdate = handleActions({
  [actions.loadTask](state, { payload: { task } }) {
    return { ...task };
  }
}, {});

export default combineReducers({
  tasks,
  modalTaskUpdate,
  form: formReducer,
  loadTaskForUpdate,
	tasksFetchingState,
	taskAddingState,
	taskRemovingState,
	taskUpdatingState,
});
