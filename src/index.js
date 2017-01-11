import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {requests} from './utils/requests';
import { createStore } from 'redux';
import trsReducer from './reducers/index';
import { Provider } from 'react-redux';


// let store = createStore(trsReducer, {});

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

const success = (projects) => {
    console.log(projects);
    let defaultStore = { projects: projects };
    let store = createStore(trsReducer, defaultStore);

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

