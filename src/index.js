import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/'; 
import thunk from 'redux-thunk';
import { fetchTasks } from './actions';

const devToolMiddleWare = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
	reducers,
	compose(applyMiddleware(thunk), devToolMiddleWare),
);

store.dispatch(fetchTasks());

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
