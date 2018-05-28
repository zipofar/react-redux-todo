import _ from 'lodash';
import { combineReducers  } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/';
import { reducer as formReducer } from 'redux-form';

const tasks = handleActions({
    [actions.addTask](state, { payload: { task } }) {
        return { ...state, [task.id]: task };
    },
    [actions.updateTask](state, { payload: { task } }) {
        const tasksWithoutCurrent = _.omit(state, [task.id]);
        const currentTask = state[task.id];
        const updatedTask = { ...currentTask, ...task }
        return { ...tasksWithoutCurrent, [task.id]: updatedTask };
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
});
