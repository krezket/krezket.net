import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LightDarkToggle from '../../components/LightDark/LightDarkToggle'
// import flur from '../../assets/Heraldry/flur.gif'
import pillar from '../../assets/fire/pillarfire.gif'
import pillar1 from '../../assets/fire/fire-4.gif'
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
                    <header className='header' id={
                        props.stateDark === 'dark'
                            ? 'dark-header'
                            : mode === 'dark'
                            ? 'dark-header'
                            : 'light-header'
                        }>

                        <div className='h1-con'>

                            <h1 className={
                                props.stateDark === 'dark'
                                    ? 'light-h1'
                                    : mode === 'dark'
                                        ? 'light-h1'
                                        : 'dark-h1'
                            }>

                                KREZKET
                            </h1>

                            <img src={divider1} alt="ornate-divider" />

                            <p className={
                                props.stateDark === 'dark'
                                    ? 'light-p'
                                    : mode === 'dark'
                                        ? 'light-p'
                                        : 'dark-p'}>

                                Web Design for Artists, Creators, and Musicians.
                            </p>
                        </div>                        

                    </header>

                    <main className='main' id={
                        props.stateDark === 'dark'
                        ? 'dark-main'
                        : mode === 'dark'
                        ? 'dark-main'
                        : 'light-main'
                        }>
                        
                        <section></section>
                        <section className={
                            props.stateDark === 'dark'
                            ? 'light-section-mid'
                            : mode === 'dark'
                            ? 'light-section-mid'
                            : 'dark-section-mid'
                            }>
                            <p>Specify your offer, list your skills. Based on your skills, list down your services, and for each service write down a list of deliverables.</p>
                        </section>
                        <section></section>

                        <p className={
                            props.stateDark === 'dark'
                            ? 'light-p'
                            : mode === 'dark'
                            ? 'light-p'
                            : 'dark-p'
                            }>
                        </p>
                    </main>

                    <LightDarkToggle setStateDark={props.setStateDark} setStateLight={props.setStateLight} />

                    <footer></footer>
                </div>
            }
        </>
    )
}
