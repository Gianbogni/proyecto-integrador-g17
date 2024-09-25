import React, { Component } from 'react'
import { options } from '../../options';
import "./SearchResults.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Gif from '../../components/Gif/Gif';

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      loading: true
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    const { query } = this.props.location.state;
    //destructuring de la query

    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
        .then(response => response.json())
        .then(data => this.setState({
          results: data.results,
          loading: false
        }))
        .catch(error => console.error('Error', error));
    }
    //usando el endpoint de search de la api, agarramos la query que haya escrito el usuario y buscamos si existe 
  }

  render() {

    let content = ""

    if (this.state.loading) { 
      content = <Gif/>
    
    } else if (this.state.results.length > 0) {
      content = (
        <ul className='ul-results'>
          {this.state.results.map((movie) => (
            <li key={movie.id} className='li-results'>
              <Link to={`/detail/id/${movie.id}`}><img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="imagendemoviecard"
              /></Link>
              <h3>{movie.title}</h3>
              <p>{movie.vote_average}</p>
              <section>
                <Link to={`/detail/id/${movie.id}`}><p>Ver detalle</p></Link>
              </section>

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
