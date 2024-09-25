import React, { Component } from 'react'
import { options } from '../../options';
import './DetailCard.css'
import Gif from '../Gif/Gif';


export class DetailCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      id: this.props.id,
      loading: true
      //este id que se pasa, viene del detail, lo pasamos al this.state y se convierte en un estado
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ movie: data, loading: false })})
      .catch(error => console.error('Error', error));
  };
  agregarFavorito(){
    const storage = localStorage.getItem('favoritos')
    if (storage !== null){
        const parsedArray = JSON.parse(storage)
        parsedArray.push(this.state.movie.id)
        const stringArray = JSON.stringify(parsedArray)
        localStorage.setItem('favoritos', stringArray)
    }
    else {
        const primerMovie = [this.state.movie.id]
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
    const favoritosRestantes = parsedArray.filter(id => id !==this.state.movie.id)
    const stringArray = JSON.stringify(favoritosRestantes)
    localStorage.setItem ('favoritos', stringArray)
    this.setState({
        esFavorito: false
    })
}

  render() {
    const { title, poster_path, vote_average, genres=[], overview, runtime, release_date} = this.state.movie;
    if (this.state.loading) {
      return <Gif />; 
    }
    const nombreGenero = genres.map(genre => genre.name).join(', ');
    return (
        
      <article className='character-detail'>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="image-details"
        />
        <h2>{title}</h2>
        <p>{release_date}</p>
        <p>Rating: {vote_average.toFixed(1)}</p>
        <p>Genres: {nombreGenero}</p>
        <p>{runtime} min</p>
        <p>Sinopsis: {overview}</p>
        <button className="botondescripcion-detail" onClick={()=>!this.state.esFavorito ? this.agregarFavorito(): this.sacarFavorito() } > {!this.state.esFavorito ? "Agregar a favoritos": "Quitar de favoritos"}</button>
      </article>



    )
  }
}

export default DetailCard;
