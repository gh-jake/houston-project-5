import React, {useState, useEffect} from 'react'

const Show = (props) => {
    const [show, setShow] = useState({})
    const [errors, setErrors] = useState("")
    
    useEffect(() => {
        fetch(`/shows/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data) {
                if (data.errors) {
                    setErrors(data.errors)
                }
                else {
                    setShow(data)
                }
            }  
            else {
                setErrors("Not authorized")
            }
        })
    }, [])

    // const renderBool = (tf) => tf ? "Yes" : "No"

    if (errors === "") {
        return (
            <div>
                <h2>{show.title}</h2>
                <p>{show.startYear}</p>
                -
                <p>{show.endYear}</p>
                <h4>{show.seasons}</h4>
                <h4>{show.category}</h4> 
                <h4>{show.description}</h4>           
            </div>
        )
    }
    else {
        return (
            <h3>{errors}</h3>
        )
    }
}

export default Show