import React from 'react';


const TernaryConditionalOutput = ({ninjas}) =>  {
     
        const ninjaList = ninjas.map( ninja => {
            // if(ninja.age > 20) {
            // return (
            //     <div key = {ninja.id}>
            //     <div>Name: { ninja.name}</div>
            //     <div>Age: { ninja.age } </div>
            //     <div>Belt: { ninja.belt }</div>
            // </div>
            // )
            // } else {
            //     return null
            // }

            return ninja.age >20 ? (
                <div key = {ninja.id}>
                    <div>Name: { ninja.name}</div>
                    <div>Age: { ninja.age } </div>
                    <div>Belt: { ninja.belt }</div>
                </div>
            ) : null
        })


        return(
            <div>
                { ninjaList }
            </div>
        )
    }


export default TernaryConditionalOutput;