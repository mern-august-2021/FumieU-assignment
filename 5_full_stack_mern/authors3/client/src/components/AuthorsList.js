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
        <div className ="w-75 mx-auto" >
             <h4> We have quoted by: </h4> 
             <table className="table table-hover">
                <thead>
                <tr>
                <th>Author</th>
                {/* <th>Kids Friendly?</th> */}
                <th>Actions Available</th>
                </tr>
                </thead>  
                <tbody>
                {authors.map((authors, index)=>{
                return (
                    <tr key={index}>
                    <td>{authors.name}</td>
                    {/* <td>{authors.suitableForKids}</td> */}
                    <td><button type="button" className="btn btn-success"><Link to={"/authors/" + authors._id +"/edit"}>Edit</Link></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                    <button onClick={(e)=>{deleteAuthor(authors._id)}} type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
            )})}
            </tbody>
            </table>    
            <div className="text-start">
            <Link to ="/authors/new"><button className="btn btn-primary ">Add Author</button></Link></div>
        </div>
            )
}

export default AuthorsList;