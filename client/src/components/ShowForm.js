import React, { useState } from 'react'

const ShowForm = ({addShow}) => {
    const [title, setTitle] = useState("")
    const [startYear, setStartYear] = useState("")
    const [endYear, setEndYear] = useState("")
    const [seasons, setSeasons] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        addShow({
            title: title,
            start_year: startYear,
            end_year: endYear,
            seasons: seasons,
            category: category,
            description: description
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                type="text"
                id="title"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <br/>
            <label>Start year</label>
            <input 
                type="number"
                id="start-year"
                value={startYear}
                onChange={(e) => {setStartYear(e.target.value)}}
            />
            <label>End year</label>
            <input 
                type="number"
                id="end-year"
                value={endYear}
                onChange={(e) => {setEndYear(e.target.value)}}
            />
            <br/>
            <label>Number of seasons</label>
            <input 
                type="number"
                id="seasons"
                value={seasons}
                onChange={(e) => {setSeasons(e.target.value)}}
            />
            <br/>
            <label>Category</label>
            <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                <option defaultValue="select">Select...</option>
                <option value="Action">Action</option>
                <option value="Animation">Animation</option>
                <option value="Anime">Anime</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Documentary">Documentary</option>
                <option value="Drama">Drama</option>
                <option value="Family">Family</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Game Show">Game Show</option>
                <option value="Horror">Horror</option>
                <option value="Mystery">Mystery</option>
                <option value="Reality">Reality</option>
                <option value="Romance">Romance</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Soap">Soap</option>
                <option value="Talk">Talk</option>
                <option value="Thriller">Thriller</option>
            </select>
            <br/>
            <label>Description</label>
            <input 
                type="text"
                id="description"
                value={description}
                onChange={(e) => {setDescription(e.target.value)}}
            />
            <input type="submit"/>
        </form>
    )
}

export default ShowForm;