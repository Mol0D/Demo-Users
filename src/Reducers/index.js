import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import DrawerReducers  from './DrawerReducers';
import usersReducers from './UsersReducers';
const rootReducer =  combineReducers({
    routing: routerReducer,
    DrawerReducers,
    usersReducers
});

export default rootReducer;

