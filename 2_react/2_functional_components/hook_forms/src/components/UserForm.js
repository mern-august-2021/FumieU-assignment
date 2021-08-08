import React, { useState } from 'react';


const UserForm = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props; 
    const [userFirstName, setUserFirstname] = useState(firstName);
    const [userLastName, setUserLastname] = useState(lastName);
    const [userEmail, setUserEmail] = useState(email);
    const [userPassword, setUserPassword] = useState(password);  
    const [userConfirmPassword, setUserConfirmPassword] = useState(confirmPassword);  
    
    const createUser = (e) => {
        e.preventDefault();
    }
    
return(
    <div className = "UserForm">
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" value={userFirstName} onChange={ (e) => setUserFirstname(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" value={userLastName} onChange={ (e) => setUserLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={userEmail} onChange={ (e) => setUserEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={userPassword} onChange={ (e) => setUserPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={userConfirmPassword} onChange={ (e) => setUserConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

            <h2>Your Form Data</h2>
            <p>First Name: { userFirstName }</p>
            <p>Last Name: { userLastName }</p>
            <p>Email: { userEmail }</p>
            <p>Password: { userPassword }</p>
            <p>Confirm Passwlrd: { userConfirmPassword }</p>      
    </div>
);
};
export default UserForm;