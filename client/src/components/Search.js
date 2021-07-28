import React, { useState } from 'react'
import SearchBar from './SearchBar'
// import ResultsList from './ResultsList'
import ShowResult from './ShowResult'

const BASE_URL = 'https://www.omdbapi.com/?'
const API_KEY = 'e0fb27a0'

const Search = () => {
    const [input, setInput] = useState('')
    const [results, setResults] = useState({})
    const [errors, setErrors] = useState([])
    // const [savedShow, setSavedShow] = useState({})

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
        console.log("show", show)
        
        // setSavedShow({
        //     title: show.Title,
        //     years: show.Year,
        //     rated: show.Rated,
        //     seasons: show.totalSeasons,
        //     genres: show.Genre,
        //     plot: show.Plot,
        //     imdb_rating: show.imdbRating,
        //     watched: false
        // })
        fetch('/shows', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(show)
        })
        .then(() => {
            if (show.error) {
                console.log(show.error)
            }
            else {
                
            }
            setResults({})
            setInput("")
        })
        // console.log(savedShow)
        // .then(res => res.json())
        // .then(data => {
        //     setShows([...shows, data])
        // })
    }

    // const handleAddShow = (e) => {
    //     e.preventDefault()
    //     fetch('/shows', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(savedShow)
    //     })
    //     .then(setResults({}))
    // }

    return (
        <div>
            <h2>Search for a show:</h2>
            <SearchBar handleChange={handleChange} handleSearch={handleSearch} />
            <ShowResult result={results} addShow={addShow}/>
        </div>
    )
}
export default Search