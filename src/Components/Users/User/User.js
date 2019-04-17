import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, Typography, Modal} from '@material-ui/core';
import DeleteButton from './DeleteButton';
import ModalUser from './ModalUser';

const styles =({
    root:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 5, 
        padding: '5px 10px'
    },
    text: {
        cursor: 'pointer'
    }
})


class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open: false
        }
        this.handleOpen= this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }

    handleOpen(){
        this.setState({open: true})
    }

    handleClose(){
        this.setState({open: false})
    }

    render(){
        const {user, classes} = this.props;
        return(
            <div>
            <Paper className={classes.root}>
                <Typography variant="h5" className={classes.text} onClick={this.handleOpen}>
                    {user.name}
                </Typography>
                <DeleteButton/>
            </Paper>
               <Modal 
                open={this.state.open}
                onClose={this.handleClose}
                >
                   <ModalUser user={user}/>
               </Modal>
            </div>
            
        )
    }
}

export default withStyles(styles)(User);
