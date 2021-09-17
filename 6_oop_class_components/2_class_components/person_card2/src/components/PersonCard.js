import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';


class PersonCard extends React.Component{
render(){
const {firstName, lastName, age, hairColor} = this.props;



    return(
        <div className = "personCard">
            <h2>{lastName} , {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}
}
export default PersonCard;