import SearchForm from '../components/SearchForm/SearchForm'
import React, { Component } from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export class Home extends Component {
  render() {
    return (
      <div>
        <SearchForm history={this.props.history}/>
        <h1>Populares</h1>
        <MovieGrid api={"https://api.themoviedb.org/3/movie/popular"} link={"/popular"}/>
        <Link to={`/showall`}><p>Ver mas Populares</p></Link>
        <h1>Estrenos</h1>
        <MovieGrid api={"https://api.themoviedb.org/3/movie/upcoming"} link={"/upcoming"}/>
        <Link to={`/showall`}><p>Ver mas Estrenos</p></Link>
      </div>
    )
  }
}

export default Home

