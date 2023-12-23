import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from './pages/Enter/Gate.jsx'
import Modern from './pages/Modern/Modern.jsx';
import OldWeb from './pages/OldWeb/OldWeb.jsx';
import './App.css'

function App() {
  const [stateModern, setStateModern] = useState("")
  const [stateOldWeb, setStateOldWeb] = useState("")

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Enter />}></Route>
        <Route path='/modern' element={<Modern />}></Route>
        <Route path='/oldweb' element={<OldWeb />}></Route>

      </Routes>
    </Router>

  )
}

export default App
