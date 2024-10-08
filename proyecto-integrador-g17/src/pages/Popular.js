import React, { Component } from 'react'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import { options } from '../options'

export class Popular extends Component {
    constructor(props){
        super(props)
        this.state ={
            movies:[],
            filteredMovies:[],
            filterValues:"",
            actualPage:1
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.actualPage}`, options)
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.results,
            filteredMovies: data.results,
            actualPage: this.state.actualPage + 1
        }))
    }

    handleFilterChange(e){
        const userValue = e.target.value
        this.setState({
            filterValues: userValue,
            filteredMovies: this.state.movies.filter(movie=> movie.title.toLowerCase().includes(userValue.toLowerCase()))
        })
    }

    handleLoadMore(){
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.actualPage}`, options)
        .then(response => response.json())
        .then(data => this.setState({
            movies: this.state.movies.concat(data.results),
            filteredMovies: this.state.movies.concat(data.results),
            actualPage: this.state.actualPage + 1
        }))
    }
    handleResetFilter(){
        this.setState({
            filterValues:"",
            filteredMovies: this.state.movies
        })
    }


  render() {
    return (
      <div>
        <h1>Populares</h1>
        <div className='search-form'><input type="text" onChange={(e)=> this.handleFilterChange(e)} value={this.state.filterValues}/>
        <button onClick={()=>this.handleResetFilter()}>Reset</button>
        </div>
        <MovieGrid movies = {this.state.filteredMovies}/>
        <button className="botondescripcion" onClick={()=> this.handleLoadMore()}>Mostar mas</button>
      </div>
    )
  }
}

export default Popular
