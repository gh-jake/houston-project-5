import React from 'react'

const Home = ({loggedIn}) => {
    if(loggedIn) {
        return (
            <div>
                <h3>To add a show, select "Search." To see your saved shows, select "My Shows."</h3>
            </div>
            
        )
    }
    else {
        return (
            <h2>Please log in or sign up.</h2>
        )
    }
}

export default Home