import { REQUEST_PROJECTS, RECEIVE_PROJECTS, REQUEST_PROJECT, RECEIVE_PROJECT } from '../actions/index';
import { combineReducers } from "redux";

const isLoading = (state = false, action) => {
    switch (action.type) {
        case REQUEST_PROJECTS:
            return action.isLoading;
        case RECEIVE_PROJECTS:
            return action.isLoading;
        default:
            return state;
    }
};

const project = (state, action) => {
    const project = action.project;
    switch (action.type) {
        case REQUEST_PROJECT:
            if (state.id === project.id) {
                return Object.assign({}, state, {isLoading: true});
            }
            return state;
        case RECEIVE_PROJECT:
            if (state.id === project.id) {
                return Object.assign({}, state, action.project, { isLoading: false });
            }
            return state;
        default:
            return state;
    }
};

const items = (state=[], action) => {
    switch (action.type){
        case RECEIVE_PROJECTS:
            return action.projects;
        case REQUEST_PROJECT:
        case RECEIVE_PROJECT:
            return state.map(p => project(p, action));
        default:
            return state;
    }
};

const projects = combineReducers({
    items,
    isLoading
});

export default projects;
