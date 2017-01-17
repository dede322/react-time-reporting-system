import requests from './utils/requests';


export const configureApplication = () => {
    requests.setServerAdress('http://127.0.0.1:8000/');
};
