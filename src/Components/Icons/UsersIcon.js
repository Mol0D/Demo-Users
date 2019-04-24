import React from 'react';
import {ReactComponent as UsersLogo} from '../../img/svg/users.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
const UsersIcon = props =>{
    return(
        <SvgIcon {...props} viewBox="0 0 24 24">
            <UsersLogo/>
        </SvgIcon>
    )
}

export default UsersIcon;
