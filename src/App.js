import React, {Component} from 'react';
import './App.css';
import Ninjas from './Ninjas';
import Ninjas2 from './DynamicData-props-ninja';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My first react app</h1>
        <p> welcome :) </p>
        <Ninjas/>
        <Ninjas2 name="niroshini" age="30" belt="black"/>
        <Ninjas2 name="niroshini2" age="22" belt="green"/>

      </div>
    )
  }
}

export default App;
