import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import whiskey from './dogPics/whiskey.jpg';
import hazel from './dogPics/hazel.jpg';
import tubby from './dogPics/tubby.jpg';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import NavBar from './NavBar';



import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 0,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina hates Tubby."
        ]
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/dogs"
              render={() => <DogList dogData={this.props.dogs} />}
            />
            <Route path="/dogs/:name"
              render={routeProps => <DogDetails {...routeProps} 
                                            dogData={this.props.dogs} />}
            />
            <Redirect to="/dogs" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
