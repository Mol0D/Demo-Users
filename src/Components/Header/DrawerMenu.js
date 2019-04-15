import React from 'react';
import {Drawer} from '@material-ui/core';
import ListMenu from '../Menu/ListMenu';
import { connect } from 'react-redux';

import { closeDrawer } from '../../Actions/ActionDrawer';

class DrawerMenu extends React.Component{
    constructor(props){
        super(props);
        this.handleDrawer = this.handleDrawer.bind(this);
    }

    handleDrawer(){
        this.props.closeDrawer();
    }

    
    render(){
        const dr = (
            <div>
                <ListMenu/>
            </div>
        )

        console.log(this.props, 2);
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
                {dr}
                </div>
            </Drawer>
        )
    }
}

const mapStateToProps = (state) =>{
    const { isOpen } = state.DrawerReducers;
    return{
        isOpen: isOpen
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        closeDrawer: ()=>dispatch(closeDrawer())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);