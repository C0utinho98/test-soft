import { combineReducers } from 'redux';
import auth from './auth';
import book from './books';

export default combineReducers({ auth, book });
