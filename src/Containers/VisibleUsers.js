import { connect } from 'react-redux';
import Users from '../Components/Users/Users';
import { getUsers, fetchDeleteUsers, fetchPostUsers } from '../Actions/Users';

const mapStateToProps = (state) =>{
    return{
        users: state.usersReducers.users,
        isLoading: state.usersReducers.isLoading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        propGetUsers: (query) => dispatch(getUsers(query)),
        propDeleteUsers: (id) => dispatch(fetchDeleteUsers(id)),
        propAddUsers: (user) => dispatch(fetchPostUsers(user))
    } 
}

const VisibleUsers = connect(mapStateToProps, mapDispatchToProps)(Users);

export default VisibleUsers;