import { combineReducers } from 'redux';
import login from './login';
import notify from './notify';
import common from './common';
import admin from './admin';

export default combineReducers({
    login,
    notify,
    common,
    admin,
})
