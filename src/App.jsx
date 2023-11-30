import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from './pages/Enter/Gate.jsx'
import Homepage from './pages/Homepage/Homepage.jsx';
import './App.css'

function App() {
  const [stateModern, setStateModern] = useState("")
  const [stateOldWeb, setStateOldWeb] = useState("")

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Enter />}></Route>

        <Route 
          path='/home' 
          element={
            <Homepage 
              stateOldWeb={stateOldWeb} 
              setStateOldWeb={setStateOldWeb}

              stateModern={stateModern}
              setStateModern={setStateModern}

            />}>
        </Route>

      </Routes>
    </Router>

  )
}

export default App
