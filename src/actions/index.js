import requests from "../utils/requests";

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REQUEST_PROJECT = 'REQUEST_PROJECT';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

const requestProjects = () => {
    return {
        type: REQUEST_PROJECTS,
    }
};

const receiveProjects = (projects) => {
    return {
        type: RECEIVE_PROJECTS,
        projects: projects
    }
};

export const refreshProjects = () => {
    return (dispatch) => {
        dispatch(requestProjects());

        let success = (projects) => {
            return dispatch(receiveProjects(projects));
        };

        requests({url: 'projects/', success: success, error: (error) => console.log('Error: ' + error)});
    }
};

const requestProject = (project) => {
    return {
        type: REQUEST_PROJECT,
        project: project
    }
};

const receiveProject = (project) => {
    return {
        type: RECEIVE_PROJECT,
        project: project
    }
};

export const refreshProject = (project) => {
    return (dispatch) => {
        dispatch(requestProject(project));

        let success = (project) => {
            return dispatch(receiveProject(project));
        };

        requests.send({ url: 'projects/' + project.id + '/', success: success, error: (error) => console.log('Error: ' + error) });
    }
};