import React, { Component } from 'react';

class Ninjas2 extends Component {
    render(props) {
        console.log(this.props);
        const { name, age, belt} = this.props; //destructuring
        return(
            <div>
                <div>Name: {this.props.name}</div>
                <div>Age: { age } </div>
                <div>Belt: { belt  }</div>
            </div>
        )
    }
}

export default Ninjas2;