import {connect} from 'react-redux';
import { closeDrawer } from '../Actions/ActionDrawer';
import DrawerMenu from '../Components/Header/DrawerMenu';


const mapStateToProps = (state) =>{
    const { isOpen } = state.DrawerReducers;
    return{
        isOpen: isOpen
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        closeDrawer: ()=>dispatch(closeDrawer())
    }
}

const VisibleDrawer = connect(mapStateToProps,mapDispatchToProps)(DrawerMenu);

export default VisibleDrawer;