import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Button, Tooltip} from '@material-ui/core';
import SearchIcon from '../../Icons/SearchIcon';

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

const SearchButton = props =>{
    const {classes} = props;
        
    return(
        <Tooltip title="Search">
            <Button variant="contained" className={classes.button} size="large" type="submit">
                <SearchIcon/>
            </Button>
        </Tooltip>
    )
}

export default withStyles(styles)(SearchButton);