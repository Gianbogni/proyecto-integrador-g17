import SearchForm from '../components/SearchForm/SearchForm'
import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <SearchForm history={this.props.history}/>
        <h2>Home de pelis</h2>
      </div>
    )
  }
}

export default Home

