import React, { Component } from 'react'
import { options } from '../../options';

export class DetailS extends Component {

  constructor(props){
    super(props)
    this.state = {
      movie: [],
      id : this.props.id
      //este id que se pasa, viene del detail, lo pasamos al this.state y se convierte en un estado
    }
  }

  componentDidMount(){
      fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?`, options)
      .then(response => response.json())
      .then(data => this.setState({ movie: data }))
      .catch(error => console.error('Error', error));
  

};
 
  
  render(){
    
    return (
      <div>
        <h1>{this.state.movie.title} </h1>
      </div>
    )
}}

export default DetailS;
