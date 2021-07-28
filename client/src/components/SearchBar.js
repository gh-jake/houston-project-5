import React from 'react'

const SearchBar = (props) => {
    return (
        <form onSubmit={props.handleSearch}>
            <label>
                <input type='text' name='input' onChange={props.handleChange}></input>
            </label>
            {/* <label>
                <select onChange={props.handleChange} name='inputType'>
                    <option defaultValue='select' >Select</option>
                    <option value='title' name='inputType'>Title</option>
                    <option value='author' name='inputType'>Author</option>
                </select>
            </label>
            <br></br><br></br> */}
            <button onClick={props.handleSearch}>Search Shows</button>
        </form>
    )
}

export default SearchBar