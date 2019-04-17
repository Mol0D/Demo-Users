import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Avatar, Modal, Typography} from '@material-ui/core';

const styles =({
    modal:{
        position: 'absolute',
        width: 350,
        backgroundColor: "#eceff1",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        paddingTop: 50,
        borderRadius: 5             
    },
    avatar:{
        color: '#fff',
        backgroundColor: "#ff5722",
        margin: '0 auto',
        width: 75,
        height: 75,
        fontSize: 40,
        marginBottom: 15
    },
    info:{
        marginTop: 100,
        borderTop: '1px solid #90a4ae',
        display: 'flex'
    },
    userInfo:{
        textAlign: 'center',
        padding: '7px 0',
        width: '50%',
        "&:first-child":{
            borderRight: '1px solid #90a4ae'
        }
    }
})



class ModalUser extends React.Component{
    
    render(){
        const {user, classes} = this.props;
        return(
                <div  className={classes.modal}>
                    <Avatar className={classes.avatar} sizes="500">LG</Avatar>
                    <Typography variant="h5">
                        {user.name}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        Number: +{user.phone}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        Email: {user.email}
                    </Typography>
                    <div className={classes.info}>
                        <div className={classes.userInfo}>
                            <Typography variant="h6">
                                Country
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                {user.country}
                            </Typography>
                        </div>
                        <div className={classes.userInfo}>
                            <Typography variant="h6">
                                City
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                {user.city}
                            </Typography>
                            
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default withStyles(styles)(ModalUser);