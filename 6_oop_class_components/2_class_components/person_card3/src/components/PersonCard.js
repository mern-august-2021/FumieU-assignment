
import React, { Component, useState } from 'react';

class PersonCard extends Component{  
    constructor(props){
        super(props);
        this.state = {newAge:this.props.age}
    }
    render(){
    const {firstName, lastName, hairColor} = this.props;
    
    const ageClickHandler = (event) => {
        console.log("I am here");
        // let newAge = this.props.age + 1
        // this.setState(newAge);
        this.setState = ({newAge:this.props.age + 1});
        console.log(this.props.age);
    }

    return(
        <div className = "personCard">
            <h2>{lastName} , {firstName}</h2>
            <p>Age: {this.state.newAge}</p>
            <button onClick = {ageClickHandler}>Birthday Button for {lastName} {firstName}</button>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}
}
export default PersonCard;