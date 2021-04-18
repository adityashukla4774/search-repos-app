import { combineReducers } from 'redux';
import repos from './reposReducers';

const rootReducer = combineReducers({
    repos
});

export default rootReducer;