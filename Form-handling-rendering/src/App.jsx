import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  let [toggle, setToggle] = useState(false)
  return (
    <div>
     {toggle ? <Login setToggle={setToggle}/> : <Register setToggle={setToggle}/>}
    </div>
  )
}

export default App
