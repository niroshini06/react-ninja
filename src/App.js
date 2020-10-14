import React, {Component} from 'react';
import './App.css';
import Ninjas from './Ninjas';
import Ninjas2 from './DynamicData-props-ninja';
import Ninjas3 from './ListOfNinja-props';
import  StatelessComp from './statelessComp';
import IfElseConditionalOutput from './IfElseConditionalOutput';
import TernaryConditionalOutput from './TernaryConditionalOutput';

class App extends Component {
  state = {
    ninjas : [
      {name: 'test1', age: 20, belt: 'red', id:1},
      {name: 'test2', age: 25, belt: 'blue', id:2},
      {name: 'test3', age: 26, belt: 'green', id:3},
    ]
  }
  render() {
    return (
      <div>
        <h1>My first react app</h1>
        <p> welcome :) </p>
          {/* <Ninjas/>
        <Ninjas2 name="niroshini" age="30" belt="black"/>
        <Ninjas2 name="niroshini2" age="22" belt="green"/>
        <Ninjas3 ninjas = { this.state.ninjas} />   

        <StatelessComp ninjas={this.state.ninjas} /> 

        <IfElseConditionalOutput  ninjas={this.state.ninjas} /> */}

        <TernaryConditionalOutput  ninjas={this.state.ninjas} />
         
      </div>
    )
  }
}

export default App;
