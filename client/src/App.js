import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import Shows from './components/Shows';
import Show from './components/Show';
import Lists from './components/Lists'
import List from './components/List'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState("")
  const history = useHistory()

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(u => {
          setLoggedIn(true)
          setUser(u)
        })
      }
    })
  }, [])

  const startSession = (user) => {
    if (!user.errors) {
      setLoggedIn(true)
      setUser(user)
      history.push('/')
    }
    else {
      setErrors(user.errors)
      history.push('/signup')
    }
  }

  const logOutUser = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() => {
      setLoggedIn(false)
      setUser({})
    })
    history.push('/')
  }
  
  return (
    <div className="App">
      <NavBar user={user} loggedIn={loggedIn} logOutUser={logOutUser} />
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' render={routerProps => <Home {...routerProps} loggedIn={loggedIn} />} />
        <Route exact path='/signup' render={routerProps => <Signup {...routerProps} errors={errors} signUpUser={startSession} />} />
        <Route exact path='/login' render={routerProps => <Login {...routerProps} logInUser={startSession} />} />
        <Route exact path='/shows' render={routerProps => <Shows {...routerProps} user={user} loggedIn={loggedIn} />} />
        <Route exact path='/lists' render={routerProps => <Lists {...routerProps} user={user} loggedIn={loggedIn} />} />
        <Route path='/shows/:id' component={Show} />
        <Route path='/lists/:id' component={List}/>
      </Switch>
    </div>
  );
}

export default App;
