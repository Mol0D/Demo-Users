import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Button, Tooltip} from '@material-ui/core';
import AddUserIcon from './AddUserIcon';
const styles= () =>({
    button:{
        float: 'right',
        marginTop: 10,
        height: 56,
        padding: 0,
        boxShadow: 'none',
        backgroundColor: "#2196f3",
        color: "#ffffff",
        borderRadius: 3,
        "&:hover":{
            backgroundColor: "#2196f3",
            color: "#ffffff"
        }
    }
})


class AddButton extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <Tooltip title="Add User">
                <Button variant="contained" className={classes.button} size="large">
                    <AddUserIcon/>
                </Button>
            </Tooltip>
        )
    }
}

export default withStyles(styles)(AddButton);