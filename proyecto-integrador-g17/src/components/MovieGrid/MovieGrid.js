import React, {Component} from "react";
import MovieCard from "../MovieCard/MovieCard";
import { options } from '../../options';
import "./MovieGrid.css"

class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    const api =this.props.api 
    fetch(api, options)
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
      
      <div className="grillapelis">
        {this.state.movies.length > 0 ? (
          this.state.movies.slice(0, 5).map((movie, index) => (
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