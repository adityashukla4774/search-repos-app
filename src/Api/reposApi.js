import { handleResponse, handleError } from './apiUtils';
//const baseUrl = `https://api.github.com/users/${userName}/repos`;

export function getRepos(userName) {
    return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(handleResponse)
    .catch(handleError);
}