import React, { Component } from "react";
import "./MovieCard.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extra: false,
        };
    }
    handleShowextra() {
        this.setState({
            extra: !this.state.extra
        });
    }

    componentDidMount(){
        const storage = localStorage.getItem('favoritos')
        if (storage !== null){
            const parsedArray = JSON.parse(storage)
            const estaenFavoritos = parsedArray.includes(this.props.movie.id)
            this.setState({
                esFavorito: estaenFavoritos
            })
        }
    }

    agregarFavorito(){
        const storage = localStorage.getItem('favoritos')
        if (storage !== null){
            const parsedArray = JSON.parse(storage)
            parsedArray.push(this.props.movie.id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)
        }
        else {
            const primerMovie = [this.props.movie.id]
            const stringArray = JSON.stringify(primerMovie)
            localStorage.setItem('favoritos', stringArray)
        }
        this.setState({
            esFavorito: true
        })
    }

    sacarFavorito(){
        const storage = localStorage.getItem('favoritos')
        const parsedArray = JSON.parse(storage)
        const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
        const stringArray = JSON.stringify(favoritosRestantes)
        localStorage.setItem ('favoritos', stringArray)
        this.setState({
            esFavorito: false
        })
    }

    render() {
        const { title, poster_path, vote_average, id, genre_ids, overview } = this.props.movie;
        return (
            <article className='character-card'>
                 <Link to={`/detail/id/${id}`}><img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="imagendemoviecard"
                /></Link>
                
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
                <button className="botondescripcion" onClick={()=>!this.state.esFavorito ? this.agregarFavorito(): this.sacarFavorito() } > {!this.state.esFavorito ? "Agregar a favoritos": "Quitar de favoritos"}</button>
            </article>


        )
    }
}


export default MovieCard
