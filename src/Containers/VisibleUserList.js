import { connect } from 'react-redux';
import UsersList from '../Components/Users/UsersList';
import { getUsers } from '../Actions/ActionsUsers';

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        users: state.usersReducers.users
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        propGetUsers: () => dispatch(getUsers())
    } 
}

const VisibleUserList = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default VisibleUserList;