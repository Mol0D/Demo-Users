import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'; 
import VisibleDrawer from '../../Containers/VisibleDrawer';
import VisibleHeader from '../../Containers/VisibleHeader';


const styles = theme =>({
    root:{
        backgroundColor: "#2196f3",
        boxShadow: `none`,

    },
    tool:{
      margin: `0 auto`,
      width: 960,
      [theme.breakpoints.down('md')]: {
          width: '100%'
      }
    },
    name:{
        color: 'white'
    },
    menuButton:{
        paddingRight: 10,
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
    }

    return(
            <AppBar position="static" className={classes.root}>
            <div className={classes.tool}>
                <Toolbar >
                    <IconButton className={classes.menuButton} onClick={openDrawer}>
                        <MenuIcon/>  
                    </IconButton>
                    <Typography variant="h6" className={classes.name}>
                        LaLaLa
                    </Typography> 
                </Toolbar>
            </div>
                
                <VisibleDrawer/>
            </AppBar> 
    )
}
export default withStyles(styles)(Header);