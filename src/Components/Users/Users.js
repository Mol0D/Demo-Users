import React from 'react';
import {withStyles} from '@material-ui/core/styles'

import Input from './Seacrh/Input';
import SearchButton from './Seacrh/SearchButton';
import AddButton from './NewUser/AddButton.js';
import VisibleUserList from '../../Containers/VisibleUserList';
import ModalUser from './User/ModalUser';


const styles = theme =>({
    root:{
        padding: 5
    },
    search:{
        padding: '0 10px'
    }
    
})


class Users extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.search}>
                    <Input/>
                    <SearchButton/>
                    <AddButton/>
                </div>
                <div>
                    <VisibleUserList/>
                </div>
                <ModalUser/>
            </div>
        )
    }
}

export default withStyles(styles)(Users);