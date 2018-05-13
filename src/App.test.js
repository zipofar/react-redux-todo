import { createStore } from 'redux';
import reducers from './reducers'
import { addTask, removeTask, addComment, removeComment } from './actions';

//tasks: {0: {id:0, text:'na-na'}, 1: {id:1, text:'bla-bla'}}
//comments: {0: {id:0, taskId:0, text:'comment1'}, 1: {id:1, taskId:0, text:'comment2'}}
const buildTask = (id, text) => ({id, text});
const buildComment = (id, task, text) => ({id, taskId: task.id, text});

it('Test1', () => {
    const store = createStore(reducers);
    expect(store.getState()).toEqual({
        tasks: {},
        comments: {},
    });
});

it('Test2', () => {
    const store = createStore(reducers);
    const task1 = buildTask(0, 'na-na');
    store.dispatch(addTask(task1));
    expect(store.getState()).toEqual({
        tasks: {0: task1},
        comments: {},
    });
});

it('Test3', () => {
    const store = createStore(reducers);
    const task1 = buildTask(0, 'na-na');
    const task2 = buildTask(1, 'bla-bla');
    store.dispatch(addTask(task1));
    store.dispatch(addTask(task2));
    store.dispatch(removeTask(0));
    expect(store.getState()).toEqual({
        tasks: {1: task2},
        comments: {},
    });
});

it('Test4', () => {
    const store = createStore(reducers);
    const task1 = buildTask(0, 'na-na');
    const task2 = buildTask(1, 'bla-bla');
    const comment1 = buildComment(0, task1, 'comment1');
    const comment2 = buildComment(1, task1, 'comment2');
    store.dispatch(addTask(task1));
    store.dispatch(addTask(task2));
    store.dispatch(addComment(comment1));
    store.dispatch(addComment(comment2));
    expect(store.getState()).toEqual({
        tasks: {0: task1, 1: task2},
        comments: {0: comment1, 1: comment2},
    });

    store.dispatch(removeComment(0));
    expect(store.getState()).toEqual({
        tasks: {0: task1, 1: task2},
        comments: {1: comment2},
    });

    store.dispatch(removeTask(0));
    expect(store.getState()).toEqual({
        tasks: {1: task2},
        comments: {},
    });
});
