import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js'
import Planetlist from '../Planetlist/Planetlist.js'
import axios from 'axios';


//Declaring App class, setting state to be equal to planet list
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: []
    };
  }

  componentDidMount = () => {
    console.log('app component mounted');
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }

  getPlanets = (url) => {
    axios.get(url)
      .then((response) => {
        this.setState({
          planetList: [
            ...this.state.planetList,
            ...response.data.results
          ]
        });
        console.log('response data: ', response.data.results);
        //If response.data.next exists, we're going to call the function again until our list contains all
        //planets
        if(response.data.next){
          this.getPlanets(response.data.next);
        }
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }




  //Setting function componentDidMount so that when this App component is rendered,
  //the get Planets ajax request is called

  render() {
    return (
      <div className="App">
        < Header/>
        < Planetlist planetList={this.state.planetList}/>
      </div>
    );
  }
}

export default App;
