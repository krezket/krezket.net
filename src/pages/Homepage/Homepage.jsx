import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import wiz from '../../assets/wizbiz/wizard.gif'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif';
import divider2 from '../../assets/dividers/jewel_break.gif';
import divider3 from '../../assets/dividers/bolt.gif';
// import divider3 from '../../assets/dividers/aniaanderas.gif';
import question from '../../assets/gifs/q.gif';
import hammer from '../../assets/gifs/hammer02.gif';
import mail from '../../assets/gifs/mail.gif';
import './Modern.css';
import './OldWeb.css';

import bg1 from '../../assets/backgrounds/back-1.jpeg'
import bg2 from '../../assets/backgrounds/back-2.jpeg'
import bg3 from '../../assets/backgrounds/fan.jpeg'
// import bg4 from '../../assets/backgrounds/h1.jpg'
import bg5 from '../../assets/backgrounds/wee.jpeg'
import bg6 from '../../assets/backgrounds/bet.jpeg'
import bg7 from '../../assets/backgrounds/h2.jpg'
import bg8 from '../../assets/backgrounds/ato.jpeg'
import bg9 from '../../assets/backgrounds/jac.jpg'

export default function Homepage(props) {
    // console.log(props)
    const style = window.sessionStorage.getItem('style')
    const [animate, setAnimate] = useState(false);
    const [switchOn, setSwitchOn] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { url: `${bg7}`, title: "seven" },
        { url: `${bg3}`, title: "three" },
        { url: `${bg1}`, title: "one" },
        { url: `${bg5}`, title: "five" },
        // { url: `${bg4}`, title: "four" },
        { url: `${bg8}`, title: "eight" },
        { url: `${bg6}`, title: "six" },
        { url: `${bg9}`, title: "nine" },
        { url: `${bg2}`, title: "two" },
    ]
    const slideStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("${slides[currentIndex].url}")`,
        transition: "background-image 0.2s ease"
    }

    // MODERN CAROUSEL
    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };
        const intervalId = setInterval(nextSlide, 500);
        return () => clearInterval(intervalId);
    }, []);

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
        window.sessionStorage.setItem('style', 'modern')

        props.setStateOldWeb("")
        props.setStateModern("modern")
    }

    // SWITCH TO OLD WEB STYLE
    const oldWebToggle = e => {
        e.preventDefault()

        window.sessionStorage.setItem('style', 'old-web')

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
            {style === 'old-web' || props.stateModern === 'old-web' ?
                <div className='ow-div'>

                    <header className='ow-header'>

                        <img className='heraldry' id='left' src={wiz} alt="krezket" />

                        <div className='ow-h1-con'>
                            <img className='divider' src={divider1} alt="ornate-divider" />
                            <h1 className='ow-h1'>
                                KREZKET
                            </h1>
                            <img className='divider' src={divider1} alt="ornate-divider" />

                            <p className='ow-p' id='owp1'>Certified Full-Stack Web Development</p>
                            <p className='ow-p'>inquiries@krezket.net</p>
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
                                    What is Krezket
                                    <img className='huh' src={question} alt="?" />
                                </h2>
                                <p>
                                    Krezket is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full Stack Web Developer with a passion for music, art, and design.
                                </p>
                                <p>
                                    I strive to be a reliable freelance web designer across a wide-range of creative media outlets.
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Services
                                    <img className='huh' src={hammer} alt="?" />
                                </h2>
                                <p>
                                    As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Contact
                                    <img className='huh' src={mail} alt="?" />
                                </h2>
                                <p>
                                    As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.
                                </p>
                            </div>
                        </section>

                        <section className='ow-section-right'>
                            <p>Other Links:</p>
                            <a href="https://instagram.com/krezket" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://github.com/krezket" target="_blank" rel="noreferrer">GitHub</a>
                        </section>

                    </main>
                </div>

                :
                <>
                    <header className='mod-header'>
                        <div className="mod-h1">
                            <Link smooth={true} duration={500} to='section0' href=""><h1>KREZKET</h1></Link>
                        </div>

                        <div className="mod-h2-con">
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
                        </div>

                        <div className='style-modern'>
                            {/* <div className={switchOn === false ? 'style-0' : 'style-1'}>
                                <a onClick={oldWebToggle}>Old Web</a>
                            </div>
                            <button onClick={toggleSwitch}>X</button> */}
                        </div>
                    </header>
 
                    <main className='mod-div'>

                        <Element name='section0' className='mod-section-0' style={slideStyles}>
                            <div className='style-modern' id='phone'>
                                {/* <div className={switchOn === false ? 'style-0' : 'style-1'}>
                                    <a onClick={oldWebToggle}>Old Web</a>
                                </div>
                                <button onClick={toggleSwitch}>X</button> */}
                            </div>

                            <header className='mod-title'>
                                <div className={`animated-heading ${animate ? 'animate-up' : ''}`}>
                                    <h1>KREZKET</h1>
                                    <p>Full-Stack Web Development</p>
                                    <p>inquiries@krezket.net</p>
                                </div>
                            </header>
                        </Element>

                        {/* <img className='divider' src={divider3} alt="ornate-divider" /> */}

                        <Element name='section1' className='mod-section-1' id='sec-1'>
                            <h2>
                                Intro
                            </h2>
                            <h1>
                                Krezket is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full-Stack Web Developer with a passion for music, art, and design.
                            </h1>
                            <h1>
                                I strive to be a reliable freelance web designer across a wide-range of creative media outlets.
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

                        <Element name='section5' className='mod-section-5' id='sec-5'>
                            <h2>
                                Contact
                            </h2>
                            <a href="https://instagram.com/krezket" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://github.com/krezket" target="_blank" rel="noreferrer">GitHub</a>
                        </Element>
                    </main>
                </>

            }
        </>
    )
}