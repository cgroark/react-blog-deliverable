import React, { Component } from 'react';
import './App.css';


class Movie extends Component {
  render() {
    return (
      <div className="Movie">
      	<h1>The Tops Directors are the Anderson Directors</h1>
      		<ol>
      			<li>Paul Thomas Anderson</li>
      			<li>Wes Anderson</li>
      		</ol>
      </div>
    );
  }
}

export default Movie;

