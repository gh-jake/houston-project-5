import React, { useState, useEffect } from 'react';
import ShowLink from './ShowLink';

const Shows = () => {
    const [shows, setShows] = useState([])
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('/shows')
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error)
            }
            else if (data.length === 0) {
                setMessage("You have no saved shows.")
            }
            else {
                setShows(data)
            }
        })
    }, [])

    const deleteShow = (id) => {
        fetch(`/shows/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            const filteredShows = shows.filter(s => s.id != id)
            setShows(filteredShows)
        })
    }

    const editShow = (updatedShow) => {
        fetch(`/shows/${updatedShow.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedShow)
        })
        .then(() => {
            const updatedShows = shows.map(s => s.id === updatedShow.id ? updatedShow : s)
            setShows(updatedShows)
        })
    }

    const showList = shows.map(s => <ShowLink key={s.id} show={s} deleteShow={deleteShow} editShow={editShow} />)

    if (error === '') {
        return (
            <div>
                <ul>
                    {message}
                    {showList}
                </ul>
            </div>
        )
    }
    else {
        return(
            <h2>Not authorized - please sign up or log in</h2>
        )
    }
    
}

export default Shows