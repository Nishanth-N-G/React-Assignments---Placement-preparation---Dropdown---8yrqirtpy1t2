import React, { useState } from 'react'
import City from './City'

function State(props) {
    // const [stateName, setStateName] = useState("Select State");

    // let HandleState = event => {
    //     setStateName(event.target.value);
    // }

    // console.log(stateName);

    return (
        <div>
            <select >
                {props.states.map((state) => (
                    <option value={state.name}>{state.name}</option>
                ))}
            </select>
            <City />
        </div>
    )
}

export default State
