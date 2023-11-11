import React from 'react'
import { Link } from 'react-router-dom'
import enter from '../../assets/enter/enter-6.gif'
import './Gate.css'

export default function Gate() {
    return (
        <div className='enter'>
            <Link to='/home'>
                <img src={enter} alt="enter" />
            </Link>
        </div>
    )
}
