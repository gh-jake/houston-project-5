import React, {useState} from 'react'

const ReviewForm = ({addReview}) => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text != "") {
            addReview({
                text: text
            })
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Your review: </label>
                <input type="text" onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ReviewForm