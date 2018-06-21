import React, { Component } from 'react';


//Declaring App class, setting state to be equal to planet list
class Planetlist extends Component {

  render() {
    return (
      <ul>
        {this.props.planetList.map(planet => {
          return <li key={planet.url}>{planet.name}</li>
        })}
      </ul>


    );
  }
}

export default Planetlist;
