import React from 'react';
import {withStyles} from '@material-ui/core/styles'

import Input from './Seacrh/Input';
import SearchButton from './Seacrh/SearchButton';
import AddButton from './NewUser/AddButton.js';

const styles = theme =>({
    root:{
        padding: 5
    }
    
})


class Users extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <div>
                    <Input/>
                    <SearchButton/>
                    <AddButton/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Users);