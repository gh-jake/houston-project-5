import React, { useState } from 'react';

const Signup = ({ onSignup, errors }) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorList, setErrorList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault() 
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(r => r.json())
        .then(user => {
            if (!user.errors) {
                onSignup(user)
            }
            else {
                setPassword("")
                setPasswordConfirmation("")
                setErrorList(user.errors)
            }
            
        })
    }

    const listOfErrors = errorList.map(e => <li>{e}</li>)

    return (
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text"
                    id="/name"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                <br/>
                <label>Password</label>
                <input 
                    type="password"
                    id="/password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <br/>
                <label>Confirm Password</label>
                <input 
                    type="password"
                    id="/passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => {setPasswordConfirmation(e.target.value)}}
                />
                <br/>
                <input type="submit"/>
            </form>
            <ul>{listOfErrors}</ul>
        </div>
    )
}

export default Signup