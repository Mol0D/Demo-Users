import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Button, Tooltip, Modal, Typography} from '@material-ui/core';
import AddUserIcon from '../../Icons/AddUserIcon';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import InputForm from '../../Common/InputForm';
import { connect } from 'react-redux';

const styles= () =>({
    button:{
        float: 'right',
        marginTop: 10,
        height: 56,
        padding: 0,
        boxShadow: 'none',
        backgroundColor: "#2196f3",
        color: "#ffffff",
        borderRadius: 3,
        "&:hover":{
            backgroundColor: "#2196f3",
            color: "#ffffff"
        }
    },
    buttonSubmit:{
        backgroundColor: "#4caf50",
        color: "#ffffff"
    },
    modal:{
        position: 'absolute',
        width: 350,
        backgroundColor: "#eceff1",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        paddingTop: 30,
        borderRadius: 5,
        outline: 'none'             
    }
})


class ModalAddUser extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open: false
        }
    }
    
    handleOpen = () =>{
        this.setState({open: true})
    }

    handleClose = () =>{
        this.setState({open: false})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        let {surName, name, email, country, city, phone} = this.props;
        this.props.propAddUsers({
            id: Date.now(),
            surName,
            name,
            email,
            country,
            city,
            phone
        })
        this.setState({open: false})
        surName = '';
        name = '';
        email = '';
        country = '';
        phone = '';
    }

        render(){
            const {classes} = this.props;
            return(
                <div>
                    <Tooltip title="Add User">
                        <Button variant="contained" className={classes.button} size="large" onClick={this.handleOpen}>
                            <AddUserIcon/>
                        </Button>
                    </Tooltip>
                    
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div className={classes.modal}>
                            <Typography variant="h4" gutterBottom>
                                Add New User
                            </Typography>
                            <form onSubmit={this.handleSubmit}>
                                <Field
                                    name="addUserSurName"
                                    component={InputForm}
                                    proplabel="Surname"
                                />
                                <Field
                                    name="addUserName"
                                    component={InputForm}
                                    proplabel="Name"
                                />
                                <Field
                                    name="addUserEmail"
                                    component={InputForm}
                                    proplabel="Email"
                                />
                                <Field
                                    name="addUserCountry"
                                    component={InputForm}
                                    proplabel="Country"
                                />
                                <Field
                                    name="addUserCity"
                                    component={InputForm}
                                    proplabel="City"
                                />
                                <Field
                                    name="addUserPhone"
                                    component={InputForm}
                                    proplabel="Phone"
                                /><br/>
                                <Button variant="contained" className={classes.buttonSubmit} type="submit">
                                    ADD
                                </Button>
                            </form>
                        </div>
                    </Modal>
                </div>
                
            )
        }
}

ModalAddUser = reduxForm({
    form: 'modalAddUser'
})(ModalAddUser);

const selector = formValueSelector('modalAddUser');

ModalAddUser = connect(
    state=>{
        const surName = selector(state, "addUserSurName")
        const name = selector(state, "addUserName")
        const email = selector(state, "addUserEmail")
        const country = selector(state, "addUserCountry")
        const city = selector(state, "addUserCity")
        const phone = selector(state, "addUserPhone")
        return{
            surName,
            name,
            email,
            country,
            city,
            phone
        }
    }
)(ModalAddUser);

export default withStyles(styles)(ModalAddUser);