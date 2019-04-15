import React from 'react';
import {List, ListItem, Dividers, ListItemIcon, ListItemText} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import ListItemLink from './ListItemLink';
import HomeIcon from './HomeIcon';
import UsersIcon from './UsersIcon';
import { compose } from 'recompose';
const styles = theme =>({
    root:{
        padding: 0,
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
    listItem:{
        backgroundColor: `#ffffff`,
        margin: 0,
        borderRadius: `0 0 5px 5px`
    },
    listItemSelected:{
        backgroundColor: `#2196f3 !important`,
        "& $icon, & $text": {
            color: "#ffffff !important"
        }
    },
    icon:{
        color: `#000000`
    },
    text:{
        color: `#000000`
    }
})

class ListMenu extends React.Component{
    render(){
        const { classes, location: {pathname} } = this.props;
        return(
            <List 
                component="nav"
                className={classes.root}
                >
                <ListItem button 
                        component={Link} 
                        to="/" 
                        classes={{root: classes.listItem, selected: classes.listItemSelected}} 
                        selected={"/" === pathname} 
                        >
                    <ListItemIcon className={classes.icon}>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home" classes={{primary: classes.text}}/>
                </ListItem>
                <ListItem button 
                        component={Link} 
                        to="/users" 
                        classes={{root: classes.listItem, selected: classes.listItemSelected}} 
                        selected={"/users" === pathname}
                        >
                    <ListItemIcon className={classes.icon}>
                        <UsersIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Users" classes={{primary: classes.text}}/>
                </ListItem>
            </List>
        )
    }
}


export default 
    compose(
        withRouter,
        withStyles(styles))(ListMenu);