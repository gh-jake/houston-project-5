import React, { useState } from 'react'

const Login = ({logInUser}) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrorsList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault() 
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password,
            })
        })
        .then(r => r.json())
        .then(user => {
            if (!user.error) {
                logInUser(user)
            }
            else {
                setPassword("")
                setErrorsList(user.error)
            }
        })
    }

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
                <input type="submit"/>
            </form>
            <br/>
            {errors}
        </div>
    )
}

export default Login