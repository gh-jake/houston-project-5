import React from 'react'

const ShowResult = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        const showObj = {
            title: props.result.Title,
            years: props.result.Year,
            rated: props.result.Rated,
            seasons: props.result.totalSeasons,
            genres: props.result.Genre,
            plot: props.result.Plot,
            imdb_rating: props.result.imdbRating,
            watched: false,
            imdb_id: props.result.imdbID
        }
        props.addShow(showObj)
    }

    const configureSeasons = (seasons) => seasons === 1 ? seasons + " season" : seasons + " seasons"

    if (Object.keys(props.result).length === 0) {
        return (
            <div></div>
        )
    }
    else if (props.result.Response === "False") {
        return (
            <div>Show not found. Please try again.</div>
        )
    }
    else {
        return (
            <div>
                <h4>{props.result.Title}</h4>
                <h5>({props.result.Year})</h5>
                <h5>{props.result.Rated}</h5>
                <h5>IMDb rating: {props.result.imdbRating}</h5>
                <h5>{configureSeasons(parseInt(props.result.totalSeasons))}</h5>
                <h5>{props.result.Genre}</h5>
                <h6>{props.result.Plot}</h6>
                <button onClick={handleClick} >Add Show</button>
            </div>
        )
    }

    
    
}

export default ShowResult