// Imports
//////////

// Base dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Game from "./game/Game";
import { Welcome } from "./welcome/Welcome";

// Styling
import '../assets/css/App.css';


// App component
////////////////

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={ Welcome } />
                <Route exact path="/game" component={ Game } />
            </Router>
        );
    }
}


// Export
/////////

export default App;