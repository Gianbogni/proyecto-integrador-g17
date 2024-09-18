import SearchForm from '../components/SearchForm/SearchForm'
import React, { Component } from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
export class Home extends Component {
  render() {
    return (
      <div>
        <SearchForm history={this.props.history}/>
        <h1>Populares</h1>
        <MovieGrid api={"https://api.themoviedb.org/3/movie/popular"} link={"/popular"}/>
        <h1>Estrenos</h1>
        <MovieGrid api={"https://api.themoviedb.org/3/movie/upcoming"} link={"/upcoming"}/>
      </div>
    )
  }
}

export default Home

