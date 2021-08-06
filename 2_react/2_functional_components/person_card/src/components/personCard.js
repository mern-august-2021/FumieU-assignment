import React from 'react';

const personCard = (props) => {
    return(
        <div className = "personCard">
            <h2>{props.lastName} , {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}

export default personCard;