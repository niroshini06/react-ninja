import React from 'react';


const StatelessComp = ({ninjas}) =>  {
     
        const ninjaList = ninjas.map( ninja => {
            return (
                <div key = {ninja.id}>
                <div>Name: { ninja.name}</div>
                <div>Age: { ninja.age } </div>
                <div>Belt: { ninja.belt }</div>
            </div>
            )
        })

        return(
            <div>
                { ninjaList }
            </div>
        )
    }


export default StatelessComp;