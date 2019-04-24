import React from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import { connect } from 'react-redux';
import Input from './Input';
import SearchButton from './SearchButton';

let SearchForm = props =>{
    
    const {searchText, propGetUsers} = props;

    const handleSubmit = (event) =>{
        event.preventDefault();
        const query = `q=${searchText}`;
        searchText === undefined ? propGetUsers() : propGetUsers(query);
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <Field
                name="searchText"
                component={Input}
            />
            <SearchButton/>
        </form>      
    )
}


SearchForm = reduxForm({
    form: "searchForm"
})(SearchForm)


const selector = formValueSelector("searchForm");

SearchForm = connect(state=> {
        const searchText = selector(state, "searchText")
        return{
            searchText
        }
    }
)(SearchForm);

export default SearchForm;