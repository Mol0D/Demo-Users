import { OPEN_DRAWER, CLOSE_DRAWER } from '../Actions/ActionDrawer';

const initialState = {
    isOpen: false
}

const DrawerReducers = (state = initialState, action) =>{
    switch(action.type){
        case OPEN_DRAWER:
            return Object.assign({}, state, {isOpen: true})
        case CLOSE_DRAWER: 
            return Object.assign({}, state, {isOpen: false})
        default:
            return state
    }
}

export default DrawerReducers;