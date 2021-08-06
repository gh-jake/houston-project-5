import React, {useState, useEffect} from 'react'
import RatingForm from './RatingForm'
import ReviewForm from './ReviewForm'

const Show = (props) => {
    const [show, setShow] = useState({})
    const [errors, setErrors] = useState("")
    const [rating, setRating] = useState([])
    const [review, setReview] = useState([])
    const [ratingFormFlag, setRatingFormFlag] = useState(false)
    const [reviewFormFlag, setReviewFormFlag] = useState(false)
    
    useEffect(() => {
        fetch(`/shows/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            if (data) {
                if (data.error) {
                    setErrors("Not authorized")
                }
                else {
                    setShow(data)
                    if (data.rating) {
                        setRating(data.rating)
                    }
                    if (data.review) {
                        setReview(data.review)
                    }
                }
            }  
            else {
                setErrors("Not authorized")
            }
        })
    }, [])


    const addRating = (rating) => {
        fetch(`/shows/${props.match.params.id}/rating`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rating)
        })
        .then(res => res.json())
        .then(data => setRating(data))
        toggleRatingForm()
        setWatched(show)
    }

    const addReview = (review) => {
        fetch(`/shows/${props.match.params.id}/review`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => setReview(data))
        toggleReviewForm()
        setWatched(show)
    }

    const setWatched = (s) => {
        if (!s.review|| !s.rating) {
            fetch(`/shows/${props.match.params.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({watched: true})
            })
            .then(res => res.json())
            .then(data => setShow({ ...show, watched: data.watched}))
        }
    }

    const deleteRating = () => {
        fetch(`/shows/${props.match.params.id}/rating`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setRating([]))
        setRatingFormFlag(false)
    }

    const deleteReview = () => {
        fetch(`/shows/${props.match.params.id}/review`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(setReview([]))
        setRatingFormFlag(false)
    }

    const configureSeasons = (seasons) => {
        if (seasons === 1) {
            return seasons + " season"
        } 
        else if (seasons > 1) {
            return seasons + " seasons"
        }
        else {
            return ""
        }
    }

    const toggleRatingForm = () => {
        ratingFormFlag ? setRatingFormFlag(false) : setRatingFormFlag(true)
    }

    const toggleReviewForm = () => {
        reviewFormFlag ? setReviewFormFlag(false) : setReviewFormFlag(true)
    }

    const configureRating = (rat) => {
        let ratingStars;
        if (rat.stars) {
            switch (rat.stars) {
                case 1:
                    ratingStars = "★☆☆☆☆"
                    break;
                case 2:
                    ratingStars = "★★☆☆☆"
                    break;
                case 3:
                    ratingStars = "★★★☆☆"
                    break;
                case 4: 
                    ratingStars = "★★★★☆"
                    break;
                case 5:
                    ratingStars = "★★★★★"
                    break;
                default: 
                    ratingStars = ""
            }
            return (
                <div>
                    <hr/>
                    <h4>Your Rating: {ratingStars}</h4>
                    <button className="delete-button" onClick={deleteRating}>X</button>
                </div>
            )
        } 
        else {
            return (
                ratingFormFlag ? <RatingForm addRating={addRating} /> : <button onClick={toggleRatingForm}>Add Rating</button>
            )
        }
    }

    const configureReview = (rev) => {
        if (rev.text) {
            return (
                <div>
                    <hr/>
                    <h4>Your review:</h4>
                    <p>{rev.text}</p>
                    <button className="delete-button" onClick={deleteReview}>X</button>
                </div>
            )
        }
        else {
            return (
                reviewFormFlag ? <ReviewForm addReview={addReview} /> : <button onClick={toggleReviewForm}>Add Review</button>
            )
        }
    }

    const configureTitle = (watched) => {
        if (watched) { 
            return <h2>✔ {show.title}</h2> 
        }
        else {
            return <h2>{show.title}</h2>
        }
    }

    if (errors === "") {
        return (
            <div>
                <hr/>
                {configureTitle(show.watched)}
                <h3>{show.years}</h3>
                <h4>Rated {show.rated}</h4>
                <h4>IMDb rating: {show.imdb_rating} ⭐</h4>
                <h4>{configureSeasons(show.seasons)}</h4>
                <h4>{show.genres}</h4> 
                <h4>{show.plot}</h4>  
                <h4>{configureRating(rating)}</h4>  
                <h4>{configureReview(review)}</h4>      
            </div>
        )
    }
    else {
        return (
            <h2>{errors}</h2>
        )
    }
}

export default Show