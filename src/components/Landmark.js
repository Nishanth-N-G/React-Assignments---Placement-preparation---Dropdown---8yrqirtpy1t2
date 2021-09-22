import React, { useState } from 'react'

function Landmark(props) {
    const [landmarkIndex, setLandmarkIndex] = useState("0");

    const landmark = props.landmark;

    const HandleLandmark = (event) => {
        setLandmarkIndex(event.target.value);
    }

    // console.log(landmarkIndex);
    return (
        <div>
            <lable> Towns : </lable>
            <select onChange={HandleLandmark}>
                {landmark.landmarks.map((landmarkName, index) => (
                    <option key={index} value={`${index}`} id={`landmark-name${index}`}>{landmarkName.name}</option>
                ))}
            </select>
            {
                <div id='landmark-name'>
                    <h2 id='landmark-title'> {landmark.landmarks[`${landmarkIndex}`].name} </h2>
                    <div id='landmark-description'> {landmark.landmarks[`${landmarkIndex}`].description} </div>
                </div>
            }
        </div>
    )
}

export default Landmark
