import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import './NavBar.css';

class NavBar extends Component {
    render(){
        const activeStyle = {
            fontWeight: "bold",
            color: "tomato"
        }
        return(
            <nav>
                <p><NavLink exact to="/dogs" activeStyle={activeStyle}>Home</NavLink></p>
                <p><NavLink exact to="/dogs/whiskey" activeStyle={activeStyle}>Whiskey</NavLink></p>
                <p><NavLink exact to="/dogs/hazel" activeStyle={activeStyle}>Hazel</NavLink></p>
                <p><NavLink exact to="/dogs/tubby" activeStyle={activeStyle}>Tubby</NavLink></p>
            </nav>
        );
    }
}

export default NavBar;