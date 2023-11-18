import React from 'react'
import LightDarkToggle from '../../components/LightDark/LightDarkToggle'
import './Homepage.css'

export default function Homepage(props) {
    const mode = window.localStorage.getItem('mode')
    console.log(props)

    return (
        <div className='container-div'>
        <LightDarkToggle setStateDark={props.setStateDark} setStateLight={props.setStateLight}/>
            <header className='header' id={
                props.stateDark === 'dark' 
                ? 'dark-header' 
                : mode === 'dark' 
                ? 'dark-header' 
                : 'light-header' }>

                <div className='triangle'></div>

                {/* <h1 className='light-h1'>krezket</h1> */}
                {/* <p className='light-p'>Web Design for Artists, Creators, and Musicians.</p> */}
                
                <h1 className={
                    props.stateDark === 'dark' 
                    ? 'light-h1' 
                    : mode === 'dark' 
                    ? 'light-h1' 
                    : 'dark-h1'}>

                    krezket
                </h1>

                <p className={
                    props.stateDark === 'dark' 
                    ? 'light-p' 
                    : mode === 'dark'
                    ? 'light-p' 
                    : 'dark-p'}>

                    Web Design for Artists, Creators, and Musicians.
                </p>
            </header>

            <main></main>

            <footer></footer>
        </div>
    )
}
