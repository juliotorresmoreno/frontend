import { combineReducers } from 'redux';
import auth from './auth';
import crud from './crud';
import messages from './messages';

export default combineReducers({ auth, crud, messages });