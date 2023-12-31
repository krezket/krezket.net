import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from './pages/Enter/Gate.jsx'
import Modern from './pages/Modern/Modern.jsx';
import OldWeb from './pages/OldWeb/OldWeb.jsx';
import CcWeather from './pages/WeatherApp/ccWeather.jsx';
import CcWeatherSearch from './pages/WeatherAppSearch/ccWeatherSearch.jsx';
import './App.css'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Modern />}></Route>
        <Route path='/modern' element={<Enter />}></Route>
        <Route path='/oldweb' element={<OldWeb />}></Route>
        <Route path='/weather' element={<CcWeather />}></Route>
        <Route path='/weather-search' element={<CcWeatherSearch />}></Route>
      </Routes>
    </Router>

  )
}

export default App
