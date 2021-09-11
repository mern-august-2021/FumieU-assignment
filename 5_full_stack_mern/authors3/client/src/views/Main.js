import React, {useEffect, useState } from 'react';
import axios from 'axios';
import AuthorsList from '../components/AuthorsList.js';

const Main = () =>{
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() =>{
        axios.get("http://localhost:8000/api/authors/")
        .then(res => {
            console.log(res.data)
            setAuthors(res.data.authors);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, [])
    const deleteAuthorsFromList = authorId =>{
        setAuthors(authors.filter(authors => authors.id !== authorId));
    }
    return (
        <div className="text-center">
            <h1>Favorite Authors</h1>
            { loaded && <AuthorsList authors={authors} deleteAuthorsFromList = {deleteAuthorsFromList}/> }
            
        </div>
    )
}

export default Main;