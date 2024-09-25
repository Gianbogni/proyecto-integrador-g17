import React, { Component } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { options } from '../options';
import Gif from '../components/Gif/Gif';



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      upcomingMovies: [],
      loading: true
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
        this.setState({ [endpoint]: data.results, loading: false });
      })
  }


  render() {
    if (this.state.loading) {
      return <Gif />;
    }
    return (
      <div>
        <h1>Peliculas HandomMovies</h1>
        <SearchForm history={this.props.history} />
        <h2 className='h2-home'>Populares</h2>
        <MovieGrid movies={this.state.popularMovies.slice(0, 5)} />
        <Link to={`/popular`}><p className='p-home'>Ver más Populares</p></Link>
        <h2 className='h2-home'>Estrenos</h2>
        <MovieGrid movies={this.state.upcomingMovies.slice(0, 5)} />
        <Link to={`/estreno`}><p className='p-home'>Ver más Estrenos</p></Link>
      </div>
    );
  }
}


export default Home;



