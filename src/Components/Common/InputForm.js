import React from 'react';
import {TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles =({
    input:{
        marginTop: 1
    }
})

const InputForm = props =>{
    const {proplabel, classes, input, label, meta: {touched, error}, ...custom} = props;
    return(
        <TextField
            id="standart-dense"
            label={proplabel}
            className={classes.input}
            hinttext={label}
            floatinglabeltext={label}
            errortext={toString(touched && error)}
            {...input}
            {...custom}
        />
    )
}

export default withStyles(styles)(InputForm);