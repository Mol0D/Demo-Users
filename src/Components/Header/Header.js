import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'; 
import DrawerMenu from './DrawerMenu';


const styles = theme =>({
    root:{
        backgroundColor: "#2196f3",
        boxShadow: `none`
    },
    tool:{
        width: 1024,
        margin: `0 auto`,
    },
    name:{
        color: 'white'
    },
    menuButton:{
        marginRight: 10,
        color: `white`,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
    }
})

const Header = (props) =>{
    const { classes, propOpenDrawer } = props;
    console.log(props);
    const openDrawer = () =>{
        propOpenDrawer();
        console.log(1);
    }

    return(
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.tool}>
                    <IconButton className={classes.menuButton} onClick={openDrawer}>
                        <MenuIcon/>  
                    </IconButton>
                    
                    <Typography variant="h6" className={classes.name}>
                        LaLaLa
                    </Typography>
                    
                </Toolbar>
                <DrawerMenu/>
                
            </AppBar>
            
        </div>
    )
}



export default withStyles(styles)(Header);