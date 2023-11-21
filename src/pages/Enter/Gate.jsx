import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import enter from '../../assets/enter/enter-6.gif'
import './Gate.css'

export default function Gate() {
    const navigate = useNavigate();
    const thePassword = "deeznutz"
    const [password, setPassword] = useState("")

    const handleChange = e => {
        if (e.target.name === "password") {
          setPassword(e.target.value)
        } 
    }

    const submitHandler = e => {
        e.preventDefault()
        password: password;
        
        if (password === thePassword) {
            navigate('/home')
        }
        else {
            alert("")
        }
    
    }

    return (
        <div className='enter'>
                <form onSubmit={submitHandler}>
                    <input name='password' type='password' placeholder='enter password' value={password} onChange={handleChange} />

                    <img src={enter} alt="enter" onClick={submitHandler} />
                </form>
        </div>
    )
}
