import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import ModalAddUser from './NewUser/ModalAddUser';
import UsersList from './UsersList';
import SearchForm from './Seacrh/SearchForm';


const styles =({
    root:{
        padding: 5
    },
    search:{
        padding: '0 10px',
        display: 'flex',
        justifyContent: 'space-between'
    }
    
})


const Users = props =>{
    
    

    const {classes, users, isLoading, propGetUsers, propDeleteUsers, propAddUsers} = props;

    

    return(
        <div className={classes.root}>
                <div className={classes.search}>
                <SearchForm propGetUsers={propGetUsers}/>
                <ModalAddUser propAddUsers={propAddUsers} />     
            </div>
             <div>
                <UsersList users={users} 
                    isLoading={isLoading} 
                    propGetUsers={propGetUsers}
                    propDeleteUsers={propDeleteUsers}
                />
            </div>
        </div>
    )
}

export default withStyles(styles)(Users);