import React, { useState, useEffect } from 'react';
import ShowForm from './ShowForm';
import ShowLink from './ShowLink';

const Shows = () => {
    const [shows, setShows] = useState([])
    const [error, setError] = useState('')
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        fetch('/shows')
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setShows(data)
            }
        })
    }, [])

    const addShow = (show) => {
        fetch('/shows', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(show)
        })
        .then(res => res.json())
        .then(data => {
            setShows([...shows, data])
        })
        toggleFormFlag()
    }

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

    const toggleFormFlag = () => {
        formFlag ? setFormFlag(false) : setFormFlag(true)
    }

    const showList = shows.map(s => <ShowLink key={s.id} show={s} deleteShow={deleteShow} editShow={editShow} />)

    if (error === '') {
        return (
            <div>
                <ul>
                    {showList}
                    {formFlag ? 
                        <ShowForm addShow={addShow} />
                        :
                        <button onClick={toggleFormFlag}>New Show</button>
                    }
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