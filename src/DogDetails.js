import React, { Component } from 'react';
import uuid from "uuid/v4";
import { Redirect, Link } from "react-router-dom";

class DogDetails extends Component {
  render() {
    let oneDog = this.props.dogData.find(dog => dog.name.toLowerCase() === this.props.match.params.name)

    if (oneDog === undefined){ 
      return <Redirect to="/dogs" />
    }

    return (
      <div className="DogDetails">
          <img src={oneDog.src} alt={oneDog.name}></img>
          <h1>{oneDog.name}</h1>
          <h2>{oneDog.age} years old</h2>
          <ul>
                {oneDog.facts.map(fact => (
                    <li key={ uuid() }>{ fact }</li>
                ))}
          </ul>
          <Link to="/dogs">Go Back</Link>
    </div>
    );
  }
}

export default DogDetails;