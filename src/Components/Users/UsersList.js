import React from 'react';
import User from './User/User';
import {CircularProgress} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'

const styles =({
    spin:{
        margin: '100px auto 0',
        width: 40
    }
})

class UsersList extends React.Component{
    
    componentDidMount(){
        this.props.propGetUsers();
    }
    render(){
        const {users, isLoading, classes, propDeleteUsers} = this.props;
        return(
            <div>
                {isLoading ? 
                    <div className={classes.spin}>
                        <CircularProgress/>
                    </div>
                :
                    <div>
                        <p>Total result: {users.length}</p>
                        {users.map((user, i)=>{
                        return <User key={i} user={user} propDeleteUsers={propDeleteUsers}/>
                    })}
                    </div>
                    
                }  
            </div>
        )
    }
    
}

export default withStyles(styles)(UsersList);