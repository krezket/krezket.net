import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import enter from '../../assets/enter/enter-6.gif'
import './Gate.css'

export default function Gate(props) {
    const navigate = useNavigate();
    const thePassword = "deeznutz"
    const [password, setPassword] = useState("")
    const code = window.sessionStorage.getItem('code')
    
    function generateRandom7DigitNumber() {
        return Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
    }
    const seven = generateRandom7DigitNumber();

    const handleChange = e => {
        if (e.target.name === "password") {
          setPassword(e.target.value)
        } 
    }

    const submitHandler = e => {
        e.preventDefault()
        
        if (props.codeState === code && password === thePassword) {
            props.setCodeState(seven)
            window.sessionStorage.setItem("code", seven)
            navigate('/home')
        }
        else {
            window.sessionStorage.setItem("code", "")
            alert("Incorrect Password")
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
