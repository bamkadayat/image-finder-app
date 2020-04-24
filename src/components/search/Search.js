import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


class Search extends Component {
    state = {
        search: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey:'16208351-d0ac10080690e9f49c03a0446',
        images:[]
    }
    render() {
        return (
            <div>
                <TextField 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Images"
                    fullWidth={true}
                />
            </div>
        )
    }
}

export default Search;
