import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import API from "./utils/API";
import Enter from './pages/Enter/Gate.jsx'
import Modern from './pages/Modern/Modern.jsx';
import OldWeb from './pages/OldWeb/OldWeb.jsx';
import CcWeather from './pages/WeatherApp/ccWeather.jsx';
import CcWeatherSearch from './pages/WeatherAppSearch/ccWeatherSearch.jsx';
import Home from './pages/Homepage/Home.jsx';
import LogIn from './pages/LogIn/';
import SignUp from './pages/SignUp/';
import Profile from './pages/Profile/Profile.jsx';
import UserPage from './pages/UserPage/UserPage.jsx';
import CreatePage from './pages/CreatePage/CreatePage';
import About from './pages/About/About.jsx';
import OtherProfile from './pages/OtherProfile/OtherProfile';
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
        <Route path='/' element={<Enter />}></Route>
        <Route path='/modern' element={<Modern />}></Route>
        <Route path='/oldweb' element={<OldWeb />}></Route>

        {/* HOME HOME HOME HOME */}
        <Route path="/blog" element={
          <Home
            userId={userId}
            username={username}
            token={token}
            setUserId={setUserId}
            setEmail={setEmail}
            setUsername={setUsername}
            setToken={setToken}
          />}
        >
        </Route>

        {/* LOGIN LOGIN LOGIN LOGIN */}
        <Route path="/login" element={
          <LogIn
            type='login'
            userId={userId}
            username={username}
            setUserId={setUserId}
            setEmail={setEmail}
            setFullName={setFullName}
            setUsername={setUsername}
            setToken={setToken}
          />}
        >
        </Route>

        {/* SIGNUP SIGNUP SIGNUP SIGNUP */}
        <Route path="/signup" element={
          <SignUp
            type='signup'
            userId={userId}
            setUserId={setUserId}
            setEmail={setEmail}
            setFullName={setFullName}
            setUsername={setUsername}
            setToken={setToken}
          />}
        >
        </Route>

        {/* PROFILE PROFILE PROFILE PROFILE */}
        <Route path={"/" + username} element={
          <Profile
            type='profile'
            userId={userId}
            token={token}
            username={username}
            fullName={fullName}
            bio={bio}
            email={email}
            setUserId={setUserId}
            setEmail={setEmail}
            setUsername={setUsername}
            setBio={setBio}
            setToken={setToken}
          />}
        >
        </Route>

        {/* PROFILE EDIT PROFILE EDIT PROFILE EDIT */}
        <Route path={"/edit"} element={
          <Profile
            type="edit"
            userId={userId}
            username={username}
            fullName={fullName}
            bio={bio}
            email={email}
            setEmail={setEmail}
            setUsername={setUsername}
            setFullName={setFullName}
            setBio={setBio}
          />}
        >
        </Route>

        {/* OTHER PROFILE OTHER PROFILE OTHER PROFILE */}
        {
          !users ?
            <Route path={"bruh"} element={<OtherProfile />}>
            </Route>
            :
            users.map(({ username }) => (
              <Route key={username} path={'/&/' + username} element={
                <OtherProfile type='otherProfile' />}
              >
              </Route>
            ))
        }

        {/* {usersLoading === true ?
          <Route path={window.location.pathname} element={<LoadingPage />}></Route>
          :

          !users ?
            <Route path={"bruh"} element={<OtherProfile />}>
            </Route>
            :
            users.map(({ username }) => (
              <Route key={username} path={'/&/' + username} element={
                <OtherProfile type='otherProfile' />}
              >
              </Route>
            ))

        } */}

        {/* PAGE PAGE PAGE PAGE */}
        {!pages ?
          <Route path={"/" + page.username + "/" + page.id} element={<UserPage />}>
          </Route>
          :
          pages.map(({ createdAt, text, title, users, id }) => (
            <Route key={title} path={"/" + users.username + "/" + id} element={
              <UserPage
                type='page'
                userId={userId}
                username={username}
                pageUsername={users.username}
                createdAt={createdAt}
                text={text}
                title={title}
                setUserId={setUserId}
                setEmail={setEmail}
                setUsername={setUsername}
                setToken={setToken}
              />}
            >
            </Route>
          ))}

        {/* CREATE PAGE CREATE PAGE CREATE PAGE */}
        <Route path='/create' element={
          <CreatePage
            userId={userId}
            username={username}
          />}
        >
        </Route>

        {/* ABOUT ABOUT ABOUT ABOUT */}
        <Route path='/about' element={
          <About />
        }>
        </Route>

      </Routes>
    </Router>

  )
}

export default App
