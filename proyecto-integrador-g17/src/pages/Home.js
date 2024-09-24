import React, { Component } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { options } from '../options';


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      upcomingMovies: [],
    };
  }


  componentDidMount() {
    this.fetchEndpoints('https://api.themoviedb.org/3/movie/popular?language=en-US', 'popularMovies');
    this.fetchEndpoints('https://api.themoviedb.org/3/movie/upcoming?language=en-US', 'upcomingMovies');
  }


  fetchEndpoints(url, endpoint) {
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.setState({ [endpoint]: data.results });
      })
  }


  render() {
    return (
      <div>
      <SearchForm history={this.props.history} />
      <h1>Populares</h1>
      <MovieGrid movies={this.state.popularMovies.slice(0, 5)} />
      <Link to={`/showall`}><p>Ver más Populares</p></Link>
      <h1>Estrenos</h1>
      <MovieGrid movies={this.state.upcomingMovies.slice(0, 5)} />
      <Link to={`/showall`}><p>Ver más Estrenos</p></Link>
    </div>
    );
  }
}


export default Home;



