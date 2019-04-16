import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';
import DeleteButton from './DeleteButton';

const styles =({
    root:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 5, 
        padding: '5px 10px'
    },
    text: {
        cursor: 'pointer'
    }
})


class User extends React.Component{
    render(){
        const {name, classes} = this.props;
        return(
            <Paper className={classes.root}>
                <Typography variant="h4" className={classes.text} >
                    {name}
                </Typography>
                <DeleteButton/>
            </Paper>
        )
    }
}

export default withStyles(styles)(User);
