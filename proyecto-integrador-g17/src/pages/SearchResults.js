import React, { Component } from 'react'
import { options } from '../options';

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    const { query } = this.props.location.state;
    //destructuring de la query
    
    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
        .then(response => response.json())
        .then(data => this.setState({ results: data.results }))
        .catch(error => console.error('Error', error));
    }
    //usando el endpoint de search de la api, agarramos la query que haya escrito el usuario y buscamos si existe 
  }

  render() {
   let content =""
    
    if (this.state.results.length > 0) {
      content = (
        <ul>
          {this.state.results.map((movie) => (
            <li key={movie.id}>
              <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                />
              <h3>{movie.title}</h3>
              <p>{movie.vote_average}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      content = <p>No se encontraron resultados.</p>;
    }
  
    return (
      <div>
        <h1>Resultados de {this.props.location.state.query}</h1>
        {content}
      </div>
    );
  }
}

export default SearchResults
