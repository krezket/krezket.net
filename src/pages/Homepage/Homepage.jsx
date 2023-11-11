import React from 'react'
import LightDarkToggle from '../../components/LightDark/LightDarkToggle'
import './homepage.css'

export default function Homepage(props) {
    const mode = window.localStorage.getItem('mode')
    console.log(props)

    return (
        <>
            <header className='header' id={
                props.stateDark === 'dark' 
                ? 'dark-header' 
                : mode === 'dark' && props.stateDark === '' && props.stateLight === '' 
                ? 'dark-header' 
                : 'light-header' }>

                <h1 className={
                    props.stateDark === 'dark' 
                    ? 'light-h1' 
                    : mode === 'dark' && props.stateDark === '' && props.stateLight === '' 
                    ? 'light-h1' 
                    : 'dark-h1'}>

                    krezket.net
                </h1>

                <p className={
                    props.stateDark === 'dark' 
                    ? 'light-p' 
                    : mode === 'dark' && props.stateDark === '' && props.stateLight === '' 
                    ? 'light-p' 
                    : 'dark-p'}>

                    Web Design for Artists, Creators, and Musicians.
                </p>
                <LightDarkToggle setStateDark={props.setStateDark} setStateLight={props.setStateLight}/>
            </header>

            <main></main>

            <footer></footer>
        </>
    )
}
