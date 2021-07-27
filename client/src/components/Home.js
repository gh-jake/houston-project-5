import React from 'react'

const Home = ({loggedIn}) => {
    if(loggedIn) {
        return (
            <h2>Welcome!</h2>
        )
    }
    else {
        return (
            <h2>Please log in or sign up.</h2>
        )
    }
}

export default Home