import React, { Component } from "react";
import "./MovieCard.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { options } from "../../options";




class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extra: false,
            genres:[]
        };
    }
    handleShowextra() {
        this.setState({
            extra: !this.state.extra
        });
    }


    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/genre/movie/list`, options)
      .then(response => response.json())
      .then(data => this.setState({ genres: data.genres }));


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


    nombreGeneros(idGenero) {
        return idGenero.map(id => {
          const genre = this.state.genres.find(g => g.id === id);
          return genre ? genre.name : null;
        }).filter(name => name !== null).join(' ');
      }
    
    render() {
        const { title, poster_path, vote_average, id, genre_ids, overview } = this.props.movie;
        const nombreGenero = this.nombreGeneros(genre_ids)

        return (
            <article className='character-card'>
                 <Link to={`/detail/id/${id}`}><img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="imagendemoviecard"
                /></Link>
               
                <h2>{title}</h2>
                <p>Rating: {vote_average.toFixed(1)}</p>
                <p>Genres: {nombreGenero}</p>
               
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
                </section>
                <button className="botondescripcion" onClick={()=>!this.state.esFavorito ? this.agregarFavorito(): this.sacarFavorito() } > {!this.state.esFavorito ? "Agregar a favoritos": "Quitar de favoritos"}</button>
            </article>




        )
    }
}




export default MovieCard


