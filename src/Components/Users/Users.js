import React from 'react';
import {withStyles} from '@material-ui/core/styles'

import Input from './Seacrh/Input';

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
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Users);