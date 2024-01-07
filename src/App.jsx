import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import API from "./utils/API";
import Enter from './pages/Enter/Gate.jsx'
import Modern from './pages/Modern/Modern.jsx';
import OldWeb from './pages/OldWeb/OldWeb.jsx';
import CcWeather from './pages/WeatherApp/ccWeather.jsx';
import CcWeatherSearch from './pages/WeatherAppSearch/ccWeatherSearch.jsx';
import './App.css'

function App() {
  const [usersLoading, setUsersLoading] = useState(false)
  const [pagesLoading, setPagesLoading] = useState(false)
  console.log("Users:", usersLoading)
  console.log("Pages:", pagesLoading)
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const [page, setPage] = useState("")
  console.log("page:", page)
  const [pages, setPages] = useState("")
  console.log(pages)
  const [users, setUsers] = useState("")
  console.log(users)

  useEffect(() => {
    setUsersLoading(true)
    API.getProfiles()
      .then((data) => {
        setUsers(data)
        setUsersLoading(false)
      })
      .catch((err) => {
        setUsersLoading(false)
        console.log("oh noes");
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setPagesLoading(true)
    API.getPages()
      .then((data) => {
        console.log("bruh:", data)
        setPages(data)
        setPagesLoading(false)
      })
      .catch((err) => {
        setPagesLoading(false)
        console.log("oh noes");
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const { pathname } = window.location
    const paths = pathname.split("/").filter(entry => entry !== "");
    const lastPath = paths[paths.length - 1]
    console.log(lastPath)

    API.getPage(lastPath)
      .then((data) => {
        console.log("bruh:", data)
        setPage(data)
      })
      .catch((err) => {
        console.log("oh noes");
        console.log(err);
      });
  }, []);


  useEffect(() => {
    const storedToken = window.sessionStorage.getItem("token");

    if (!storedToken) {
      return;
    }

    API.verifyToken(storedToken)
      .then((data) => {
        setToken(storedToken);
        setUserId(data.id);
        setUsername(data.username);
        setFullName(data.fullName);
        setEmail(data.email);
      })
      .catch((err) => {
        console.log("oh noes");
        console.log(err);
      });
  }, []);

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
