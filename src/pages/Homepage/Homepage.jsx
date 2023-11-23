import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LightDarkToggle from '../../components/LightDark/LightDarkToggle'
import flur from '../../assets/Heraldry/flur.gif'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif'
// import divider1 from '../../assets/dividers/jewel_break.gif'
// import divider1 from '../../assets/dividers/bolt.gif'
import './Homepage.css'

export default function Homepage(props) {
    console.log(props)
    const navigate = useNavigate();
    const mode = window.localStorage.getItem('mode')
    const code = window.sessionStorage.getItem('code')

    // if (code === "0") {
    //     window.location.pathname = '/'
    // }

    return (
        <>
            {!code && !props.codeState || code === '' && props.codeState === ''?
                <>
                    <div>Hello</div>
                </>
                :
                <div className='container-div'>
                    <LightDarkToggle setStateDark={props.setStateDark} setStateLight={props.setStateLight} />
                    <header className='header' id={
                        props.stateDark === 'dark'
                            ? 'dark-header'
                            : mode === 'dark'
                                ? 'dark-header'
                                : 'light-header'
                    }>

                        {/* <img src={divider1} alt="ornate-divider" /> */}

                        {/* <h1 className='light-h1'>krezket</h1> */}
                        {/* <p className='light-p'>Web Design for Artists, Creators, and Musicians.</p> */}

                        <div className='h1-con'>

                            {/* <img className='flur' src={flur} alt="flur" /> */}

                            <h1 className={
                                props.stateDark === 'dark'
                                    ? 'light-h1'
                                    : mode === 'dark'
                                        ? 'light-h1'
                                        : 'dark-h1'}>

                                KREZKET
                            </h1>

                            {/* <img className='flur' src={flur} alt="flur" /> */}

                        </div>

                        <img src={divider1} alt="ornate-divider" />
                        
                        <p className={
                            props.stateDark === 'dark'
                                ? 'light-p'
                                : mode === 'dark'
                                    ? 'light-p'
                                    : 'dark-p'}>

                            Web Design for Artists, Creators, and Musicians.
                        </p>

                    </header>

                    <main className='main' id={
                        props.stateDark === 'dark'
                            ? 'dark-main'
                            : mode === 'dark'
                                ? 'dark-main'
                                : 'light-main'
                    }>

                        <p className={
                            props.stateDark === 'dark'
                                ? 'light-p'
                                : mode === 'dark'
                                    ? 'light-p'
                                    : 'dark-p'}>
                            We strive for the best designs aligned with efficient functionality so users navigate through your website with ease.
                        </p>
                    </main>

                    <footer></footer>
                </div>
            }
        </>
    )
}
