import React from 'react';
import {Drawer} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import ListMenu from '../Menu/ListMenu';

import { withRouter} from 'react-router-dom';
import { compose } from 'recompose';



class DrawerMenu extends React.Component{
    constructor(props){
        super(props);
        this.handleDrawer = this.handleDrawer.bind(this);
    }

    handleDrawer(){
        this.props.closeDrawer();
    }

    
    render(){
        return(
            <Drawer
                anchor="top"
                open={this.props.isOpen}
                onClose={this.handleDrawer}
            >
                <div tabIndex={0}
                    role="button"
                    onClick={this.handleDrawer}
                    onKeyDown={this.handleDrawer}
                >
                <ListMenu/>
                </div>
            </Drawer>
        )
    }
}




export default DrawerMenu;