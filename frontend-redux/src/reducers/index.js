import { combineReducers } from 'redux';
import user from './user';
import devs from './devs';
import match from './match';

export default combineReducers({
    user, devs, match 
})