import React, { Component } from "react";
import "./MovieCard.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extra: false
        };
    }
    handleShowextra() {
        this.setState({
            extra: !this.state.extra
        });
    }

    render() {
        const { title, poster_path, vote_average, id, genre_ids, overview } = this.props.movie;
        return (
            <article className='character-card'>
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="imagendemoviecard"
                />
                <h2>{title}</h2>
                <p>Rating: {vote_average}</p>
                <p>Genres: {genre_ids}</p>
                
                <button
                    className="botondescripcion"
                    onClick={() => this.handleShowextra()}
                >
                    {!this.state.extra ? "Ver más acerca de la pelicula" : "Ocultar informacion acerca de la pelicula"}
                </button>
                <section className={this.state.extra ? "show" : "hide"}>
                    <p>{overview}</p>
                </section>
                <section>
                <Link to={`/detail/id/${id}`}><p>Ver detalle</p></Link>
                {/* <Link to={this.props.link}><h4>Ver todas</h4></Link> */}
                </section>
                <button  className="botondescripcion"> Va a ir favoritos </button>
            </article>


        )
    }
}


export default MovieCard
