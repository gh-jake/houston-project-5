import React from 'react'
import { Link } from 'react-router-dom'

const ListLink = (props) => {
    return (
        <div>
            <Link to={`/lists/${props.list.id}`}>
                <h2 className="title">{props.list.title}</h2>
            </Link>
            <button className="delete-button" onClick={() => props.deleteList(props.list.id)}>X</button>
            <hr/>
        </div>
    )
}

export default ListLink