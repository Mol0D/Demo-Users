import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, Typography, Modal, Tooltip, Button} from '@material-ui/core';
import DeleteIcon from '../../Icons/DeleteIcon';
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
        cursor: 'pointer',
        "&:hover":{
            color: "#2196f3"
        }
    },
    button:{
        padding: '10px 0',
        boxShadow: 'none',
        backgroundColor: "#e53935",
        color: "#ffffff",
        borderRadius: 3,
        "&:hover":{
            backgroundColor: "#e53935",
            color: "#ffffff"
        }
    }
})


class User extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open:false
        }
    }

    
    handleOpen = () =>{
        this.setState({open: true})
    }

    handleClose = () =>{
        this.setState({open: false})
    }

    handleDelete = () =>{
        this.props.propDeleteUsers(this.props.user.id)
    }
    

        render(){
            const {user, classes} = this.props;
            return(
                <div>
                <Paper className={classes.root}>
                    <Typography variant="h5" className={classes.text} onClick={this.handleOpen}>
                        {user.name} {user.surName}
                    </Typography>
                    <Tooltip title="Delete User">
                    <Button variant="contained" className={classes.button} size="small" onClick={this.handleDelete}>
                        <DeleteIcon/>
                    </Button>
                </Tooltip>
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
