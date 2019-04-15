import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as HomeLogo} from '../../img/svg/home.svg';

const HomeIcon = props =>{
    return(
        <SvgIcon {...props}>
            <HomeLogo/>
        </SvgIcon>
    )
}

export default HomeIcon;