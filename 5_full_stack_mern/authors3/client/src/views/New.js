import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const New = () =>{
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [suitableForKids, setSuitableForKids] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(name)
        axios.post("http://localhost:8000/api/authors",{
            name
        }) 
        .then(res => {
            console.log(res)
            setName("")
            navigate('/authors')
    })
        .catch(err => {
            console.log(err.response)
            setErrors(err.response.data.errors);
    })};

    // const clickHandler = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:8000/api/authors",{
    //         suitableForKids
    // })
    // .then(res => {
    //     console.log(res)
    //     setSuitableForKids(true)
    // })
    // .catch(err => console.log(err))
    // }

    
    return (
        <div className="text-center w-50 mx-auto" >
            <h1>Favorite Authors</h1>
            <Link to={"/authors/"}>Home</Link>
            <div className="text-start">
            <h3>Add a new author:</h3>
            <form onSubmit = {submitHandler} className="mb-3">
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
            <label className="form-label">Name: </label> 
            <input type="text" value={name} name="name" className="form-control" onChange={ (e) => {
                // console.log(e.target)
                setName(e.target.value) }} />
                {errors.name?
                <p>{errors.name.message}</p>
                :null
                }
                <br></br> 
            <button type="submit" className="btn btn-primary">Submit</button>
           </form>
           </div>
           {/* <div>
            <label htmlFor="suitableForKids">Kid Friendly:</label>
            <input onClick={clickHandler} name="suitableForKids" type="checkbox" />  
            </div> */}
        </div>
    )
}

export default New;