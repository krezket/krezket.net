import React from 'react'
import { Input, useState } from 'react';
import API from '../../utils/API.js';
import { Link, useNavigate } from 'react-router-dom';

export default function LogIn() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = e => {
    if (e.target.name === "username") {
      setUsername(e.target.value)
    } else if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  const submitHandler = e => {
    e.preventDefault()

    API.login({
      username: username,
      password: password
    })
      .then(data => {
        // console.log('login data:',data)
        props.setUserId(data.user.id)
        props.setEmail(data.user.email)
        props.setFullName(data.user.fullName)
        props.setUsername(data.user.username)
        props.setToken(data.token)
        window.sessionStorage.setItem("token", data.token)
        window.sessionStorage.setItem("userId", data.user.id);
        navigate("/")
        // window.location.reload(false);
      }).catch(err => {
        console.log(err)
        alert("Unable to Sign Up")
      })
  }
  return (
    <main className='body'>

      <div className='initial-div'>
        <div className='header-div'>
          <header className='mod-title'>
            <h1 className='auto-type'>"LOG IN"</h1>
            <Link to={'/'} className='Back'>Back to home</Link>
          </header>
          <form onSubmit={submitHandler}>
            <input id='si-user' name='username' placeholder='username' value={username} onChange={handleChange}></input>
            <input id='si-pass' name='password' type='password' placeholder='password' value={password} onChange={handleChange}></input>
            <button id='si-submit'>Log In</button>
          </form>
        </div>
      </div>
    </main>
  )
}