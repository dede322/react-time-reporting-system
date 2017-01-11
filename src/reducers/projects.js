import { REQUEST_PROJECTS, RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/index';

const project = (state, action) => {
    switch (action.type) {
        case RECEIVE_PROJECT:
            if (state.id === action.id) {
                return Object.assign({}, state, {
                    name: action.name,
                    description: action.description,
                    tasks: action.tasks
                });
            } else return state;
        default:
            return state;
    }
};

const projects = (state={}, action) => {
    switch (action.type){
        case REQUEST_PROJECTS:
            return Object.assign({}, state, {
                projectsIsFetching: true
            });
        case RECEIVE_PROJECTS:
            return Object.assign({}, state, {
                projectsIsFetching: false,
                projects: action.projects
            });
        case RECEIVE_PROJECT:
            return state.projects.map(p => project(p, action));
        default:
            return state;
    }
};

export default projects;