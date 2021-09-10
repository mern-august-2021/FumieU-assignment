import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const AuthorsList = (props) => {
    const { authors, deleteAuthorsFromList } = props;

    const deleteAuthor = (authorId) => {
        axios.delete("http://localhost:8000/api/authors/" + authorId )
        .then(res => {
            deleteAuthorsFromList(authorId)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        <div style={{ textAlign: "center"}}>
             <h4> We have quoted by: </h4> 
             <table style={{border: "1px solid black"}}>
                <thead>
                <tr style={{border: "1px solid black", marginRight: "auto", marginLeft: "auto"}}>
                <th>Author</th>
                <th>Actions Available</th>
                </tr>
                </thead>  
                <tbody>
                {authors.map((authors, index)=>{
                return (
                    <tr key={index}>
                    <td style={{border: "1px solid black"}}>{authors.name}</td>
                    <td style={{border: "1px solid black"}}><Link to={"/authors/" + authors._id +"/edit"}>Edit</Link> |
                    <button onClick={(e)=>{deleteAuthor(authors._id)}}>Delete</button></td>
                    </tr>
            )})}
            </tbody>
            </table>    
            
        </div>
            )
}

export default AuthorsList;