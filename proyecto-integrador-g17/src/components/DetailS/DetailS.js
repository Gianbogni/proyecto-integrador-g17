import React, { Component } from 'react'
import { options } from '../../options';
import './DetailS.css'
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export class DetailS extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      id: this.props.id
      //este id que se pasa, viene del detail, lo pasamos al this.state y se convierte en un estado
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?`, options)
      .then(response => response.json())
      .then(data => this.setState({ movie: data }))
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
    const { title, poster_path, vote_average, genre_ids, overview, runtime, release_date} = this.state.movie;
    console.log(this.state.movie);
    
    return (
        
      <article className='character-detail'>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="image-details"
        />
        <h2>{title}</h2>
        <p>{release_date}</p>
        <p>Rating: {vote_average}</p>
        <p>Genres: {genre_ids}</p>
        <p>{runtime} min</p>
        <p>Sinopsis: {overview}</p>
        <section>
          {/* <Link to={this.props.link}><h4>Ver todas</h4></Link> */}
        </section>
        <button className="botondescripcion-detail" onClick={()=>!this.state.esFavorito ? this.agregarFavorito(): this.sacarFavorito() } > {!this.state.esFavorito ? "Agregar a favoritos": "Quitar de favoritos"}</button>
      </article>



    )
  }
}

export default DetailS;
