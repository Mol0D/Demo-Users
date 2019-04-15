import { connect } from 'react-redux';
import Header from '../Components/Header/Header';
import { openDrawer } from '../Actions/ActionDrawer';

const mapDispatchToProps = dispatch =>{
    return{
        propOpenDrawer: ()=>(dispatch(openDrawer()))
    }
}


const VisibleHeader = connect(null, mapDispatchToProps)(Header);

export default VisibleHeader;