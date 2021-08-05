import React, {useState} from 'react'

const RatingForm = ({addRating}) => {
    const [stars, setStars] = useState("")

    const handleChange = (e) => {
        setStars(parseFloat(e.target.value))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (stars != "") {
            addRating({
                stars: stars
            })
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Your rating: </label>
                <select name="rating" onChange={handleChange}>
                    <option defaultValue="select" >select</option>
                    <option value="1">★☆☆☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="4">★★★★☆</option>
                    <option value="5">★★★★★</option>
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default RatingForm