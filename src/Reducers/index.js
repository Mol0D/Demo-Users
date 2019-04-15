import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import DrawerReducers  from './DrawerReducers';

const rootReducer =  combineReducers({
    routing: routerReducer,
    DrawerReducers
});

export default rootReducer;

