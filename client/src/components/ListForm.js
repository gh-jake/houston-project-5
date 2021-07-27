import React, { useState } from 'react'

const ListForm = ({addList}) => {
    const [title, setTitle] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        addList({
            title: title
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                type="text"
                id="title"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <input type="submit"/>
        </form>
    )
}

export default ListForm;