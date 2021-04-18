import * as types from './actionTypes';
import * as reposApi from '../../Api/reposApi';

export function loadReposSuccess(repos) {
    return { type: types.LOAD_REPOS_SUCCESS, repos }
}

export function setReposToEmptyArray() {
    return { type: types.LOAD_REPOS_SUCCESS, repos: [] }
}

export function loadRepos(userName) {
    return function(dispatch) {
        return reposApi
                .getRepos(userName)
                .then(repos => {
                    dispatch(loadReposSuccess(repos));
                })
                .catch()
    }
}