import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Button, Tooltip} from '@material-ui/core';
import DeleteIcon from './DeleteIcon';
const styles= () =>({
    button:{
        padding: '10px 0',
        boxShadow: 'none',
        backgroundColor: "#e53935",
        color: "#ffffff",
        borderRadius: 3,
        "&:hover":{
            backgroundColor: "#e53935",
            color: "#ffffff"
        }
    }
})


class DeleteButton extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <Tooltip title="Delete User">
                <Button variant="contained" className={classes.button} size="small">
                    <DeleteIcon/>
                </Button>
            </Tooltip>
        )
    }
}

export default withStyles(styles)(DeleteButton);