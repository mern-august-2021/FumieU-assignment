import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const {id} = props;
    const [name, setName] = useState();

useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + id) 
        .then(res => {
            console.log(res.data)
            setName(res.data.author.name);
        })
}, [])

const editAuthor = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/authors/" + id + "/edit", {
        name:name
    })  
    .then((res) => {
        console.log(res)
        navigate('/authors')
    })
    .catch(err => console.log(err))

}

return(
    <div className="text-start w-50 mx-auto" >
        <h2 >Edit this Author</h2>
        <form className="mb-3 text-start" onSubmit={editAuthor}>
        <p>
        <label className="form-label">Name:</label>
        </p>
        <input className="form-control" type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
         <p>
         <br></br> 
        <input type="submit" className="btn btn-primary"/>&nbsp;&nbsp; 
        <Link to ="/authors/"><button className="btn btn-secondary">Cancel</button></Link>       
        </p>
        </form>
    </div>
)

}

export default Edit;