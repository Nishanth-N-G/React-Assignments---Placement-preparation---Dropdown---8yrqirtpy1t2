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
            <select onChange={HandleLandmark}>
                {landmark.landmarks.map((landmarkName, index) => (
                    <option key={index} value={`${index}`} id={`#city-name${index}`}>{landmarkName.name}</option>
                ))}
            </select>
            {
                <div> {landmark.landmarks[`${landmarkIndex}`].description} </div>
            }
        </div>
    )
}

export default Landmark
