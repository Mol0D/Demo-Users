import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducers} from 'redux-form';
import DrawerReducers  from './Drawer';
import usersReducers from './Users';
const rootReducer =  combineReducers({
    routing: routerReducer,
    form: formReducers,
    DrawerReducers,
    usersReducers
});

export default rootReducer;

