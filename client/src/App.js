import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import FilmDetails from './components/FilmDetails';
import PickSeats from './components/PickSeats';
import Checkout from './components/Checkout';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <ul>
              <li><a href="#"></a>Home</li>
              <li><a href="#"></a>About</li>
              <li><a href="#"></a>Login</li>
              <li><a href="#"></a>Checkout</li>
            </ul>
          </div>
          <h1 className="App-title">Dinner and A Movie</h1>
        </header>
        <LandingPage />
      </div>
    );
  }
}

export default App;
