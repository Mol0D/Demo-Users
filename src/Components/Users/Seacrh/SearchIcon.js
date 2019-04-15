import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import {ReactComponent as Search} from '../../img/svg/search.svg';

const SearchIcon = props =>{
    return{
        <SvgIcon {...props}>
            <Search/>
        </SvgIcon>
    }
}

export default SearchIcon;