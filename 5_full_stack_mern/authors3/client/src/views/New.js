import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const New = () =>{
    const [name, setName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(name)
        axios.post("http://localhost:8000/api/authors",{
            name
        }) 
        .then(res => {
            console.log(res)
            setName("")
    })
        .catch(err => console.log(err))
    };
    return (
        <div style={{textAlign:"center"}}>
            <h1>Favorite Authors</h1>
            <Link to={"/authors/"}>Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit = {submitHandler}>
            <label>Name: </label> 
            <input type="text" value={name} name="name" onChange={ (e) => {
                console.log(e.target)
                setName(e.target.value) }} />
            <button>Submit</button>
        </form>
        </div>
    )
}

export default New;