import React, { useState } from 'react'
import ShowResult from './ShowResult'

const BASE_URL = 'https://www.omdbapi.com/?'
const API_KEY = 'e0fb27a0'

const Search = ({loggedIn}) => {
    const [input, setInput] = useState('')
    const [results, setResults] = useState({})
    const [errors, setErrors] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        searchShow(prepareInput(input))
    }

    const searchShow = (preparedInput) => {
        fetch(BASE_URL + `t=${preparedInput}` + '&apikey=' + API_KEY)
        .then(res => res.json())
        .then(data => {
            setResults(data)
        })
    }

    const prepareInput = (string) => {
        return string.toLowerCase().split(' ').map(word => {
            return (word.charAt(0).toUpperCase() + word.slice(1));
          }).join('+');
    }

    const addShow = (show) => {       
        fetch('/shows', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(show)
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                setErrors("Show has already been added.")
            }
            setResults({})
        })
        setInput("")
    }

    if (loggedIn) {
        return (
            <div>
                <h2>Search for a show:</h2>
                <form onSubmit={handleSearch}>
                    <label>
                        <input type='text' name='input' value={input} onChange={handleChange}></input>
                    </label>
                    <button onClick={handleSearch}>Search Shows</button>
                </form>
                <ShowResult result={results} addShow={addShow}/>
                {errors}
            </div>
        )
    }
    else {
        return <h2>Not authorized - please sign up or log in</h2>
    }
    
}
export default Search