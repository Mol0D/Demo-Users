import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as Delete} from '../../../img/svg/delete.svg';

const DeleteIcon = props =>{
    return(
        <SvgIcon {...props} viewBox="0 0 48 48">
            <Delete/>
        </SvgIcon>
    )
}

export default DeleteIcon;