import React, { useState, useEffect } from 'react';
import ListForm from './ListForm';
import ListLink from './ListLink';

const Lists = () => {
    const [lists, setLists] = useState([])
    const [error, setError] = useState('')
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        fetch('/lists')
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setLists(data)
            }
        })
    }, [])

    const addList = (list) => {
        fetch('/lists', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(list)
        })
        .then(res => res.json())
        .then(data => {
            setLists([...lists, data])
        })
        toggleFormFlag()
    }

    const deleteList = (id) => {
        fetch(`/lists/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            const filteredLists = lists.filter(l => l.id != id)
            setLists(filteredLists)
        })
    }

    const editList = (updatedList) => {
        fetch(`/lists/${updatedList.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedList)
        })
        .then(() => {
            const updatedLists = lists.map(l => l.id === updatedList.id ? updatedList : l)
            setLists(updatedLists)
        })
    }

    const toggleFormFlag = () => {
        formFlag ? setFormFlag(false) : setFormFlag(true)
    }

    const listsList = lists.map(l => <ListLink key={l.id} list={l} deleteList={deleteList} editShow={editList} />)

    if (error === '') {
        return (
            <div>
                <ul>
                    {listsList}
                    {formFlag ? 
                        <ListForm addList={addList} />
                        :
                        <button onClick={toggleFormFlag}>New List</button>
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

export default Lists