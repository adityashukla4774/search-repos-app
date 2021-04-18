import reposReducer from './Redux/Reducers/reposReducers';
import * as types from './Redux/Actions/actionTypes';

const repos = [
    {
        name: 'Aditya',
        description: "Aditya's Repository1",
        owner: {
            login: 'adityaLogin'
        },
        stargazers_count: 8,
        open_issues_count: 0,
        watchers_count: 10000
    },
    {
        name: 'AdityaShukla',
        description: "AdityaShukla's Repository1",
        owner: {
            login: 'adityaShuklaLogin'
        },
        stargazers_count: 1008,
        open_issues_count: 0,
        watchers_count: 10001
    }
];

describe(`App`, () => {
    var newState = [];
    it(`Should display a list of repositories`, () => {
        newState = reposReducer([], { type: types.LOAD_REPOS_SUCCESS, repos })
    });
    expect(newState).toEqual( repos );
});