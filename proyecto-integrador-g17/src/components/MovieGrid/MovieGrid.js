import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";

class MovieGrid extends Component {
  render() {
    const { movies } = this.props; 

    return (
      <div className="grillapelis">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
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
