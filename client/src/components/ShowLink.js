import React from 'react'
import { Link } from 'react-router-dom'

const ShowLink = (props) => {

    const configureTitle = (watched) => {
        if (watched) { 
            return <h2>✔ {props.show.title}</h2> 
        }
        else {
            return <h2>{props.show.title}</h2>
        }
    }

    return (
        <div>
            
            <Link className="title" to={`/shows/${props.show.id}`}>
                {configureTitle(props.show.watched)}
            </Link>
            <button className="delete-button" onClick={() => props.deleteShow(props.show.id)}>X</button>
            <hr/>
        </div>
    )
}

export default ShowLink