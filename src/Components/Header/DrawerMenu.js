import React from 'react';
import {Drawer} from '@material-ui/core';
import ListMenu from '../Menu/ListMenu';

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