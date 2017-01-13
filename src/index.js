import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {requests} from './utils/requests';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import trsReducer from './reducers/index';
import { Provider } from 'react-redux';
import defaultStore from './initial/defaultStore'


// let store = createStore(trsReducer, {});

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

const success = (projects) => {
    console.log(projects);
    let storeObject = defaultStore(
        {
            projects: {
                items: projects
            }
        });
    let store = createStore(trsReducer, storeObject, applyMiddleware(thunkMiddleware));

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
      document.getElementById('root')
    )
};

const error = (response) => {
    console.log(response);
};

requests({url: "projects/", success: success, error: error});

