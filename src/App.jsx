import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from './pages/Enter/Gate.jsx'
import Homepage from './pages/Homepage/Homepage.jsx';
import './App.css'

function App() {
  const [stateLight, setStateLight] = useState("")
  const [stateDark, setStateDark] = useState("")
  const [codeState, setCodeState] = useState("")

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Enter codeState={codeState} setCodeState={setCodeState} />}></Route>

        <Route 
          path='/home' 
          element={
            <Homepage 
              stateDark={stateDark} 
              setStateDark={setStateDark}

              stateLight={stateLight}
              setStateLight={setStateLight}

              codeState={codeState}
            />}>
        </Route>

      </Routes>
    </Router>

  )
}

export default App
