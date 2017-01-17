import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import requests from './utils/requests';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import trsReducer from './reducers/index';
import { Provider } from 'react-redux';
import defaultStore from './initial/defaultStore'
import {configureApplication} from "./config";

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import HomePage from  './components/page/HomePage'
import ProjectPage from  './components/page/ProjectPage'


configureApplication();

const success = (projects) => {
    let storeObject = defaultStore();
    storeObject.projects.items = projects;
    let store = createStore(trsReducer, storeObject, applyMiddleware(thunkMiddleware));
    requests.setStore(store);

    ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={HomePage} />
                    <Route path='project-detail/:projectIndex' component={ProjectPage}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root')
    )
};

const error = (response) => {
    console.log(response);
};

requests.send({url: "projects/", success: success, error: error});

