import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';

import './Modern.css';

import bg1 from '../../assets/backgrounds/back-1.jpeg'
import bg2 from '../../assets/backgrounds/back-2.jpeg'
import bg3 from '../../assets/backgrounds/deer2.png'
// import bg4 from '../../assets/backgrounds/h1.jpg'
import bg5 from '../../assets/backgrounds/wee.jpeg'
import bg6 from '../../assets/backgrounds/bet.jpeg'
import bg7 from '../../assets/backgrounds/h2.jpg'
import bg8 from '../../assets/backgrounds/ato.jpeg'
import bg9 from '../../assets/backgrounds/jac.jpg'

export default function Modern(props) {
    // console.log(props)
    // const style = window.sessionStorage.getItem('style')
    // const [switchOn, setSwitchOn] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        transition: "background-image 0.3s ease"
    }

    // MODERN CAROUSEL
    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };
        const intervalId = setInterval(nextSlide, 444);
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

    return (

                <div className='body'>
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
                            
                            {/* <h2>
                                <Link smooth={true} duration={500} to='section4' href="">Clients</Link>
                            </h2> */}

                            <h2>
                                <Link smooth={true} duration={500} to='section5' href="">Contact</Link>
                            </h2>

                            <h2>
                                <a href='/'>Home</a>
                            </h2>
                        </div>

                        <div className='style-modern'>
                            {/* <div className={switchOn === false ? 'style-0' : 'style-1'}>
                                <a onClick={oldWebToggle}>Old Web</a>
                            </div>
                            <button onClick={toggleSwitch}>View This Site As</button> */}
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

                        <Element name='section1' className='mod-section animated slideInUp' id='sec-1'>
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

                        <Element name='section2' className='mod-section'>
                            <h2>
                                Services
                            </h2>
                            <h1>
                                As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.
                            </h1>
                        </Element>

                        {/* <Element name='section3' className='mod-section'>
                            <h2>
                                Partners
                            </h2>
                        </Element> */}

                        {/* <Element name='section4' className='mod-section'>
                            <h2>
                                Clients
                            </h2>
                        </Element> */}

                        <Element name='section5' className='mod-section' id='sec-5'>
                            <h2>
                                Contact
                            </h2>
                            <a href="https://instagram.com/krezket" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://github.com/krezket" target="_blank" rel="noreferrer">GitHub</a>
                        </Element>
                    </main>
                </div>


    )
}