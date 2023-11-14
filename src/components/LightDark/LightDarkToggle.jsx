import React, { useState, useEffect } from 'react';

export default function LightDarkToggle(props) {
    console.log(props)

    const lightToggle = e => {
        e.preventDefault()
        
        window.localStorage.setItem('mode', 'light')

        props.setStateDark("")
        props.setStateLight("light")
    }

    const darkToggle = e => {
        e.preventDefault()

        window.localStorage.setItem('mode', 'dark')

        props.setStateLight("")
        props.setStateDark("dark")
    }
    
    return (
        <div>
            <button onClick={darkToggle}>Dark</button>
            <button onClick={lightToggle}>Light</button>
        </div>
    )
}
