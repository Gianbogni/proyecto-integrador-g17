import React, { Component } from 'react';
import { options } from '../../options';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./Favorites.css";
export class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extra: false,
            movies: [],
        };
    }
    handleShowextra() {
        this.setState({
            extra: !this.state.extra
        });
    }

    componentDidMount() {
        const storedIds = JSON.parse(localStorage.getItem('favoritos') || "[]");

        storedIds.forEach((id) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
                .then(response => response.json())
                .then(movie => {
                    this.setState(prevState => ({
                        movies: [...prevState.movies, movie]
                    }));
                })
                .catch(error => console.error("Error fetching movie:", error));
        });
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                <div className="favorites-grid">
                    {this.state.movies.map((movie, index) => (
                        <div className='character-cardF' key={index}>
                            <Link to={`/detail/id/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="imagendemoviecardF"
                                />
                            </Link>
                            <h2>{movie.title}</h2>
                            <p>Rating: {movie.vote_average}</p>
                            <button
                                className="botondescripcionF"
                                onClick={() => this.handleShowextra()}
                            >
                                {!this.state.extra ? "Ver más acerca de la película" : "Ocultar información acerca de la película"}
                            </button>
                            <section className={this.state.extra ? "show" : "hide"}>
                                <p>{movie.overview}</p>
                            </section>
                            <section>
                                <Link to={`/detail/id/${movie.id}`}><p>Ver detalle</p></Link>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}



export default Favorites;


