import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import VisibleHeader from './Containers/VisibleHeader';
import ListMenu from './Components/Menu/ListMenu';
import Home from './Components/Home/Home';
import VisibleUsers from './Containers/VisibleUsers';


const drawerWidth = 240;

const styles = theme =>({
  root: {

  },
  contentCenter:{
    width: 960,
    margin: '0 auto',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: '100%'
  }
  },
  contentMenu:{
    width: drawerWidth,
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
  },
  contentMain:{
    width: 960-drawerWidth,
    [theme.breakpoints.down('md')]: {
      width: '100%'
  }
  }
})

class App extends Component {
  render() {
    const {classes} = this.props;
    return (

        <div className={classes.root}>
          <CssBaseline/>
          <VisibleHeader/>
          <div className={classes.contentCenter}>
            <div className={classes.contentMenu}>
              <ListMenu/>
            </div>
            <div className={classes.contentMain}>
              <Route exact path="/" component={Home}/>
              <Route  path="/users" component={VisibleUsers}/>
            </div>
          </div>
        </div>

      
    );
  }
}

export default withStyles(styles)(App);
