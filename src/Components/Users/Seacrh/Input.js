import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const styles = {
    root:{
        margin: 10
    }
}

class Input extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <TextField
                id="standard-dense"
                label="Search"
                variant="outlined"
                className={classes.root}
            />
        )
    }
}

export default withStyles(styles)(Input);
