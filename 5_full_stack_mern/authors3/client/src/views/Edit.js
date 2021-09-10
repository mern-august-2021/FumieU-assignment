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
    <div>
        <form onSubmit={editAuthor}>
        <p>
        <label>Name</label><br />
        <input type="text" 
        name="name" 
        value={name} 
        onChange={(e) => { setName(e.target.value) }} />
        <input type="submit" />
        <Link to ="/authors/"><button>Cancel</button></Link>       
        </p>
        </form>
    </div>
)

}

export default Edit;