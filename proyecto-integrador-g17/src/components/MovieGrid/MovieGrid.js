import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";
import Gif from "../Gif/Gif";
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
          <Gif/>
        )}
      </div>
    );
  }
}

export default MovieGrid;
