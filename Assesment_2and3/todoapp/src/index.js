import React from 'react';
import { connect, Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './reducers/initialState';
import { loadTasks } from './actions/TaskActions';


const store = configureStore(initialState);
store.dispatch(loadTasks());
const app = (
    <Provider store={store}>
     <BrowserRouter>
            <App />
        </BrowserRouter>
        </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
