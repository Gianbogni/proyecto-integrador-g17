import React, { Component } from 'react'
import "./SearchForm.css"

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
    }


    handleInputChange(e) {
        this.setState({
            query: e.target.value
        })
    }

    handleInputSubmit(){
        this.props.history.push("/searchresults", {query: this.state.query})
    }

    render() {
        return (
            <div className='search-form'>
                <input onChange={(e) => this.handleInputChange(e)} type='text' name="query" value={this.state.query} />
                <button onClick = {()=>this.handleInputSubmit()}> Search Movies </button>
            </div>
        )
    }
}

export default SearchForm
