import React from 'react'
import { Link } from 'react-router-dom'

const ShowLink = (props) => {
    console.log(props.show)
    return (
        <div>
            <Link to={`/shows/${props.show.id}`}>
                <h2 className="title">{props.show.title}</h2>
            </Link>
            <button className="delete-button" onClick={() => props.deleteShow(props.show.id)}>X</button>
            <hr/>
        </div>
    )
}

export default ShowLink