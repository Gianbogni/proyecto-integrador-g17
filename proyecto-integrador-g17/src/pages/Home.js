import SearchForm from '../components/SearchForm/SearchForm'
import React, { Component } from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
export class Home extends Component {
  render() {
    return (
      <div>
        <SearchForm history={this.props.history}/>
        <h2>Populares</h2>
        <MovieGrid api={"https://api.themoviedb.org/3/movie/popular"} link={"/popular"}/>
        <h2>Estrenos</h2>
        <MovieGrid api={"https://api.themoviedb.org/3/movie/upcoming"} link={"/upcoming"}/>
      </div>
    )
  }
}

export default Home

