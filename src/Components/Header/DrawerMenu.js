import React from 'react';
import {Drawer} from '@material-ui/core';
import ListMenu from '../Menu/ListMenu';

const DrawerMenu = props =>{

    const handleDrawer = () => {
        props.closeDrawer();
    }

    return(
        <Drawer
            anchor="top"
            open={props.isOpen}
            onClose={handleDrawer}
        >
            <div tabIndex={0}
                role="button"
                onClick={handleDrawer}
                onKeyDown={handleDrawer}
            >
                <ListMenu/>
            </div>
        </Drawer>
    )
}




export default DrawerMenu;