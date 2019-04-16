import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as Add} from '../../../img/svg/addUser.svg';

const AddUserIcon = props =>{
    return(
        <SvgIcon {...props} viewBox="0 0 48 48">
            <Add/>
        </SvgIcon>
    )
}

export default AddUserIcon;