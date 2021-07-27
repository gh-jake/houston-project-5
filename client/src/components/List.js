import React, {useState, useEffect} from 'react'

const List = (props) => {
    const [list, setList] = useState({})
    const [errors, setErrors] = useState("")
    
    useEffect(() => {
        fetch(`/lists/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data) {
                if (data.errors) {
                    setErrors(data.errors)
                }
                else {
                    setList(data)
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
                <h2>{list.title}</h2>          
            </div>
        )
    }
    else {
        return (
            <h3>{errors}</h3>
        )
    }
}

export default List