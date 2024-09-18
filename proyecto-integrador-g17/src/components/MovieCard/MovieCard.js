import React, { Component } from "react";
import "./MovieCard.css"
// import { Link } from "react-router-dom/cjs/react-router-dom.min";


class MovieCard extends Component {

    render() {
        const { title, poster_path, vote_average} = this.props.movie;
        return (
            <article className='character-card'>
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="movie-poster"
                />
                <h2>{title}</h2> 
                <p>Rating: {vote_average}</p> 
                <p>Genres: {/* aca tienen que ir los generos dsp */}</p>
                <p className="more">Ver más</p>
                {/* <Link to={this.props.link}><h4>Ver todas</h4></Link> */}
                <p className='delete'>Borrar</p>
            </article>


        )
    }
}


export default MovieCard
