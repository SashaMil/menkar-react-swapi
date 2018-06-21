import React, { Component } from 'react';

//Declaring App class, setting state to be equal to planet list
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <h1 className="App-title">Swapi App</h1>
        </header>
      </div>
    );
  }
}

export default Header;
