import React, { useState } from 'react'
import Landmark from './Landmark'

function City(props) {
    const [cityIndex, setCityIndex] = useState("0");

    const cities = props.city;

    const HandleCity = (event) => {
        setCityIndex(event.target.value);
    }

    // console.log(cityIndex);

    return (
        <div>
            <lable> Cities : </lable>
            <select onChange={HandleCity}>
                {cities.city.map((cityName, index) => (
                    <option key={index} value={`${index}`} id={`city-name${index}`}>{cityName.name}</option>
                ))}
            </select>
            {
                <div id='city-name'>
                    <h2 id='city-title'>{cities.city[`${cityIndex}`].name} </h2>
                    <div id='city-description'> {cities.city[`${cityIndex}`].description} </div>
                </div>
            }
            <Landmark landmark={cities.city[`${cityIndex}`]} />
        </div>
    )
}

export default City
