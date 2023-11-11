import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from './pages/Enter/Gate.jsx'
import Homepage from './pages/Homepage/Homepage.jsx';
import './App.css'

function App() {
  const [stateLight, setStateLight] = useState("")
  const [stateDark, setStateDark] = useState("")

  return (

    <Router basename='/krezket.net'>
      <Routes>
        <Route path='/' element={<Enter />}></Route>

        <Route 
          path='/home' 
          element={
            <Homepage 
              setStateDark={setStateDark}
              stateDark={stateDark} 
              setStateLight={setStateLight}
              stateLight={stateLight}
            />}>
        </Route>

      </Routes>
    </Router>

  )
}

export default App
