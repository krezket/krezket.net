import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import wiz from '../../assets/wizbiz/wizard.gif'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif'
import question from '../../assets/gifs/q.gif'
import divider2 from '../../assets/dividers/jewel_break.gif'
import './Homepage.css';

import bg1 from '../../assets/backgrounds/back-1.jpeg'
import bg2 from '../../assets/backgrounds/back-2.jpeg'

export default function Homepage(props) {
    console.log(props)
    const [animate, setAnimate] = useState(false);
    const [switchOn, setSwitchOn ] = useState(false);
    const style = window.localStorage.getItem('style')

    const slides = [
        {url: `${bg1}`, title: "one"},
        {url: `${bg2}`, title: "two"},
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("${slides[currentIndex].url}")`
    }

    // ANIMATE ON ARRIVAL
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    // ANIMATE ON CLICK
    const fadeIn = () => {
        setAnimate(false);
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 500);

        return () => clearTimeout(timeout);
    };

    // SWITCH TO MODERN STYLE
    const modernToggle = e => {
        e.preventDefault()
        setSwitchOn(false)
        if (style === 'old-web') {
            fadeIn();
        }
        window.localStorage.setItem('style', 'modern')

        props.setStateOldWeb("")
        props.setStateModern("modern")
    }

    // SWITCH TO OLD WEB STYLE
    const oldWebToggle = e => {
        e.preventDefault()

        window.localStorage.setItem('style', 'old-web')

        props.setStateModern("")
        props.setStateOldWeb("old-web")
    }

    // TOGGLE SWITCH
    const toggleSwitch = e => {
        e.preventDefault()
        switchOn === false ? setSwitchOn(true) : setSwitchOn(false)
    }

    return (
        <>
            {style === 'modern' || props.stateModern === 'modern' ?
                <>
                    <header className='mod-header'>
                        <h1>
                            KREZKET
                        </h1>
                        <h2>
                            <Link smooth={true} duration={500} to='section1' href="">Intro</Link>
                        </h2>
                        <h2>
                            <Link smooth={true} duration={500} to='section2' href="">Services</Link>
                        </h2>
                        <h2>
                            <Link smooth={true} duration={500} to='section3' href="">Partners</Link>
                        </h2>
                        <h2>
                            <Link smooth={true} duration={500} to='section4' href="">Clients</Link>
                        </h2>
                        <h2>
                            <Link smooth={true} duration={500} to='section5' href="">Contact</Link>
                        </h2>
                    </header>

                    <div className='mod-div'>
                        <div style={slideStyles}>
                            <div className='style-modern'>
                                <div className={ switchOn === false ? 'style-0' : 'style-1'}>
                                    <a onClick={oldWebToggle}>Old Web</a>
                                </div>
                                <button onClick={toggleSwitch}>x</button>
                            </div>
                            <header className='mod-title'>
                                <h1 className={`animated-heading ${animate ? 'animate-up' : ''}`}>KREZKET.NET</h1>
                            </header>
                        </div>

                        <Element name='section1' className='mod-section-1'>
                            <h2>
                                Intro
                            </h2>
                            <h1>
                                Krezket is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full-Stack Web Developer with a passion for music, art, and design.
                            </h1>
                            <h1>
                                I strive to be a reliable freelance web designer for a wide-range of creative media outlets.
                            </h1>
                        </Element>

                        <Element name='section2' className='mod-section-2'>
                            <h2>
                                Services
                            </h2>
                            <h1>
                                As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.
                            </h1>
                        </Element>

                        <Element name='section3' className='mod-section-3'>
                            <h2>
                                Partners
                            </h2>

                        </Element>

                        <Element name='section4' className='mod-section-4'>
                            <h2>
                                Clients
                            </h2>

                        </Element>

                        <Element name='section5' className='mod-section-5'>
                            <h2>
                                Contact
                            </h2>

                        </Element>
                    </div>
                </>
                :
                <div className='ow-div'>

                    <header className='ow-header'>

                        <img className='heraldry' id='left' src={wiz} alt="krezket" />

                        <div className='ow-h1-con'>
                            <h1 className='ow-h1'>
                                KREZKET.NET
                            </h1>

                            <img className='divider' src={divider1} alt="ornate-divider" />

                            <p className='ow-p'>
                                Web Design for Artists, Creators, and Musicians.
                            </p>
                            <img className='divider' src={divider2} alt="ornate-divider" />

                        </div>

                        <img className='heraldry' id='right' src={wiz} alt="krezket" />

                    </header>

                    <main className='ow-main'>

                        <section className='ow-section-left'>
                            <p>View this website as:</p>

                            <a onClick={modernToggle}>Modern</a>
                        </section>

                        <section className='ow-section-mid'>
                            <div className='ow-section-mid-con-1'>
                                <h2>
                                    <img className='huh' src={question} alt="?" />
                                    What is Krezket
                                    <img className='huh' src={question} alt="?" />
                                </h2>
                                <p>
                                    Krezket is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full Stack Web Developer with a passion for music, art, and design.
                                </p>
                                <p>
                                    I strive to be a reliable freelance web designer for a wide-range of creative media outlets.
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Services
                                </h2>
                                <p>
                                    As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.
                                </p>
                            </div>
                        </section>

                        <section className='ow-section-right'>
                            <p>Other Links:</p>
                        </section>

                    </main>

                    <footer>
                        Specify your offer, list your skills. Based on your skills, list down your services, and for each service write down a list of deliverables.
                    </footer>
                </div>
            }
        </>
    )
}