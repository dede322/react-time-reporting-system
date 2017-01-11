import dispatch from "redux";
import {requests} from "../utils/requests";

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REQUEST_PROJECT = 'REQUEST_PROJECT';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

const requestProjects = () => {
    return {
        type: REQUEST_PROJECTS
    }
};

const receiveProjects = (projects) => {
    return {
        type: RECEIVE_PROJECTS,
        projects: projects
    }
};


export const refreshProjects = () => {
    dispatch(requestProjects());

    let success = (projects) => {
        dispatch(receiveProjects(projects));
    };

    requests({ url: 'projects/', success: success, error: (error) => console.log('Error: ' + error) });
};

const requestProject = () => {
    return {
        type: REQUEST_PROJECT
    }
};

const receiveProject = (projects) => {
    return {
        type: RECEIVE_PROJECT,
        projects: projects
    }
};

export const refreshProject = (id) => {
    dispatch(requestProject(id));

    let success = (project) => {
        dispatch(receiveProject(project));
    };

    requests({ url: 'projects/' + id + '/', success: success, error: (error) => console.log('Error: ' + error) });
};