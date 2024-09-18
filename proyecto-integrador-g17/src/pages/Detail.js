import React, { Component } from 'react'

export class Detail extends Component {

  render() {

    const id = this.props.match.params.id;
    const movie = this.props.movies.find((movie) => movie.id === Number(id))
    return (
      <div>
        <h1>{movie.title} </h1>
      </div>
    )
  }
}

export default Detail
