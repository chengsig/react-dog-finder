import React, { Component } from 'react';
import { Link } from "react-router-dom";

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <p>HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.</p>
        {this.props.dogData.map(dog => (
            <div className="DogList-details">
                <img src={dog.src} alt={dog.name} />
                <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </div>
        ))}
      </div>
    );
  }
}

export default DogList;