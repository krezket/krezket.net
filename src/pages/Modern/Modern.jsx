import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';

import NavBar from '../../components/NavBar/NavBar';
import './Modern.css';

import bg1 from '../../assets/backgrounds/back-1.jpeg'
import bg2 from '../../assets/backgrounds/back-2.jpeg'
// import bg3 from '../../assets/backgrounds/deer2.png'
// import bg4 from '../../assets/backgrounds/h1.jpg'
import bg5 from '../../assets/backgrounds/wee.jpeg'
import bg6 from '../../assets/backgrounds/bet.jpeg'
import bg7 from '../../assets/backgrounds/h2.jpg'
import bg8 from '../../assets/backgrounds/ato.jpeg'
import bg9 from '../../assets/backgrounds/jac.jpg'

export default function Modern(props) {
    // console.log(props)
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const slides = [
        { url: `${bg7}`, title: "seven" },
        // { url: `${bg3}`, title: "three" },
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
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("${slides[currentIndex].url}")`,
        transition: "background-image 3s ease",
    }

    // MODERN CAROUSEL
    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };
        const intervalId = setInterval(nextSlide, 2000);
        return () => clearInterval(intervalId);
    }, [slides.length]);

    return (

        <div className='body'>

            {/* <NavBar></NavBar> */}
            <div className='scroll-watcher'></div>

            <div className="entry-screen"></div>

            <main className='mod-div'>

                <Element name='section0' className='mod-section-0' style={slideStyles}>
                    <header className='mod-title'>
                        <div className={'animated-heading'}>
                            <h1>KREZKET</h1>
                            <p>Full-Stack Web Development</p>
                            <p>inquiries@krezket.net</p>
                        </div>
                    </header>
                </Element>

                {/* <img className='divider' src={divider3} alt="ornate-divider" /> */}
                <Element name='section1' className='mod-section' id='sec-1'>
                    <h2>
                        Intro
                    </h2>
                    <h1>
                        "Krezket" is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full-Stack Web Developer with a passion for music, art, and design.
                    </h1>
                    <h1>
                        I strive to be a reliable freelance web designer across a wide-range of creative media outlets.
                    </h1>
                </Element>

                <Element name='section2' className='mod-section' id='sec-2'>
                    <h2>
                        Services
                    </h2>
                    <h1>
                        As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.
                    </h1>
                </Element>

                <Element name='section5' className='mod-section' id='sec-5'>
                    <h2>
                        Contact
                    </h2>
                    <a href="https://instagram.com/krezket" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://github.com/krezket" target="_blank" rel="noreferrer">GitHub</a>
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

            </main>
        </div>


    )
}