import React, {Component} from "react";
import MovieCard from "../MovieCard/MovieCard";
import { options } from '../../options';

class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movies: data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.movies.length > 0 ? (
          this.state.movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  }
}




export default MovieGrid;