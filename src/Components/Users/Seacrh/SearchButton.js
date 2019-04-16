import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Button, Tooltip} from '@material-ui/core';
import SearchIcon from './SearchIcon';
const styles= () =>({
    button:{
        marginTop: 10,
        marginLeft: 7,
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


class ButtonSearch extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <Tooltip title="Search">
                <Button variant="contained" className={classes.button} size="large">
                    <SearchIcon/>
                </Button>
            </Tooltip>
        )
    }
}

export default withStyles(styles)(ButtonSearch);