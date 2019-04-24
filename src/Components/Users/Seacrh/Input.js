import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const styles = {
    root:{
        marginTop: 10,
        width: 350
    }
}

const Input = props =>{
        const {classes, input, label, meta: {touched, error}, ...custom} = props;
        return(
            <TextField
                id="standard-dense"
                label="Search"
                variant="outlined"
                className={classes.root}
                hinttext={label}
                floatinglabeltext={label}
                errortext={toString(touched && error)}
                {...input}
                {...custom}
            />
        )
        
}

export default withStyles(styles)(Input);
