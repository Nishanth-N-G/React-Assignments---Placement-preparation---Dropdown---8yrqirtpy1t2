import React, { useState } from 'react'
import City from './City'

function State(props) {
    const [stateIndex, setStateIndex] = useState("0");

    const HandleState = (event) => {
        setStateIndex(event.target.value);
    }

    // console.log(stateIndex);

    return (
        <div>
            <lable> States :  </lable>
            <select onChange={HandleState}>
                {props.states.map((state, index) => (
                    <option key={index} value={`${index}`} id={`state-name${index}`}>{state.name}</option>
                ))}

            </select>
            {
                <div id='state-name'>
                    <h2 id='state-title'> {props.states[`${stateIndex}`].name} </h2>
                    <div id='state-description'> {props.states[`${stateIndex}`].description} </div>
                </div>
            }
            <City city={props.states[`${stateIndex}`]} />
        </div>
    )
}

export default State
