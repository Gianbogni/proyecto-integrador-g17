import SearchForm from '../components/SearchForm/SearchForm'
import React, { Component } from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
export class Home extends Component {
  render() {
    return (
      <div>
        <SearchForm history={this.props.history}/>
        <h2>Home de pelis</h2>
        <MovieGrid/>
      </div>
    )
  }
}

export default Home

