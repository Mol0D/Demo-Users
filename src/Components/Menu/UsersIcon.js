import React from 'react';
import {ReactComponent as Users} from '../../img/svg/users.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
const UsersIcon = props =>{
    return(
        <SvgIcon {...props}>
            <Users/>
        </SvgIcon>
    )
}

export default UsersIcon;
