import React from 'react';
import User from './User/User';
import getUsers from '../../Actions/ActionsUsers';
class UsersList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.propGetUsers();
    }
    render(){
        console.log(this.props);
        return(
            <div>
                {this.props.users.map((user, i)=>{
                    return <User key={i} name={user.name}/>
                })}
            </div>
        )
    }
    
}

export default UsersList;