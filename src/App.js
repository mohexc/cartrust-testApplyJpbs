import React, { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

import './App.css';

const userL = localStorage.getItem("user")
  ? localStorage.getItem("user")
  : null

const App = () => {
  const [user, setUser] = useState(userL)

  return (
    <>
      { user ? <Home /> : <Login /> }

    </>
  )
}

export default App;
