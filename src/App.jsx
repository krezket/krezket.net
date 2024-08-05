import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from './pages/Enter/Gate.jsx'
import Modern from './pages/Modern/Modern.jsx';
import OldWeb from './pages/OldWeb/OldWeb.jsx';
import CcWeather from './pages/WeatherApp/ccWeather.jsx';
import CcWeatherSearch from './pages/WeatherAppSearch/ccWeatherSearch.jsx';
import LogIn from './pages/LogIn/LogIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx'
import Kreznote from './pages/Kreznote/Kreznote.jsx';
import './App.css'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Modern />}></Route>
        <Route path='/LogIn' element={<LogIn />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/about' element={<Enter />}></Route>
        <Route path='/oldweb' element={<OldWeb />}></Route>
        <Route path='/weather' element={<CcWeather />}></Route>
        <Route path='/weather-search' element={<CcWeatherSearch />}></Route>
        <Route path='/Kreznote' element={<Kreznote />}></Route>
      </Routes>
    </Router>

  )
}

export default App
