import { useState, useEffect } from 'react';

export default function StyleToggle(props) {
    console.log(props)

    const modernToggle = e => {
        e.preventDefault()
        
        window.localStorage.setItem('style', 'modern')

        props.setStateOldWeb("")
        props.setStateModern("modern")
    }

    const oldWebToggle = e => {
        e.preventDefault()

        window.localStorage.setItem('style', 'old-web')

        props.setStateModern("")
        props.setStateOldWeb("old-web")
    }
    
    return (
        <div className='style'>
            <button onClick={oldWebToggle}>Old Web</button>
            <button onClick={modernToggle}>Modern</button>
        </div>
    )
}
