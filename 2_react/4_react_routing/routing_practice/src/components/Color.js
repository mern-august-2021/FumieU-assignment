import React from 'react';
import { Link } from '@reach/router';

const Color = (props) => {

return (
    <div style={{textAlign: "center", backgroundColor: "pink" }}> 
        <h1 style={{font: "blue"}}>The word is: Hello</h1>

        {/* <p><Link to = "/home">Home</Link></p>
        <p><Link to = "/4">Number 4</Link></p>
        <p><Link to = "/hello">Hello</Link></p>
        <p><Link to = "/hello/blue/red">See it in color</Link></p> */}
    </div>
);
}

export default Color;