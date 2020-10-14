import React, { Component } from 'react';

class Ninjas3 extends Component {
    render() {
        const { ninjas } = this.props;
        const ninjaList = ninjas.map( ninja => {
            return (
                <div>
                <div>Name: { ninja.name}</div>
                <div>Age: { ninja.age } </div>
                <div>Belt: { ninja.belt }</div>
            </div>
            )
        })

        

    }
}

export default Ninjas3;