import React, {useState, useEffect} from 'react'

const Show = (props) => {
    const [show, setShow] = useState({})
    const [errors, setErrors] = useState("")
    const [ratingFormFlag, setRatingFormFlag] = useState(false)
    const [reviewFormFlag, setReviewFormFlag] = useState(false)
    
    useEffect(() => {
        fetch(`/shows/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data) {
                if (data.errors) {
                    setErrors(data.errors)
                }
                else {
                    setShow(data)
                }
            }  
            else {
                setErrors("Not authorized")
            }
        })
    }, [])

    const addRating = (rating) => {
        console.log(rating)
    }

    const addReview = (review) => {
        console.log(review)
    }

    const editRating = (rating) => {

    }

    const editReview = (review) => {

    }

    const deleteRating = (ratingID) => {

    }

    const deleteReview = (reviewID) => {
        
    }

    const configureSeasons = (seasons) => {
        if (seasons === 1) {
            return seasons + " season"
        } 
        else if (seasons > 1) {
            return seasons + "seasons"
        }
        else {
            return ""
        }
    }

    // const renderBool = (tf) => tf ? "Yes" : "No"

    if (errors === "") {
        return (
            <div>
                <hr/>
                <h2>{show.title}</h2>
                <h3>{show.years}</h3>
                <h4>Rated {show.rated}</h4>
                <h4>IMDb rating: {show.imdb_rating}</h4>
                <h4>{configureSeasons(show.seasons)}</h4>
                <h4>{show.genres}</h4> 
                <h4>{show.plot}</h4>           
            </div>
        )
    }
    else {
        return (
            <h3>{errors}</h3>
        )
    }
}

export default Show