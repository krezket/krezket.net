import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import enter from '../../assets/enter/enter-6.gif'
import './Gate.css'

export default function Gate(props) {
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault()
        
        navigate('/modern')
    }

    return (
        <div className='enter'>
            <img src={enter} alt="enter" onClick={submitHandler} />
        </div>
    )
}
