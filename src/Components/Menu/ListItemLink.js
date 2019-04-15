import React from 'react';
import {ListItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    root:{
        backgroundColor: `#ffffff`,
        margin: 0
    },
    selected: {
        backgroundColor: `#2196f3 !important`,
        "& $primary, & $icon": {
            color: theme.palette.common.white
          }
    }
})

const ListItemLink = props =>{
    const {classes} = props;
    return <ListItem button 
                    component={Link} 
                    {...props}  
                    classes={{root: classes.root, selected: classes.selected}}   
                    />
}

export default withStyles(styles)(ListItemLink);