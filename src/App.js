import React, {Component} from 'react';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My first react app</h1>
        <p> welcome :) </p>
        <Ninjas />
      </div>
    )
  }
}

export default App;
