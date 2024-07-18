import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';

import NavBar from '../../components/NavBar/NavBar';
import './Modern.css';

export default function Modern(props) {
    // console.log(props)
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const slideStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-image 0.5s ease",
        transitionDelay: "2s",
    }

    // MODERN CAROUSEL
    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    //     };
    //     const intervalId = setInterval(nextSlide, 3000);
    //     return () => clearInterval(intervalId);
    // }, [slides.length]);

    return (

        <div className='body'>

            {/* <NavBar></NavBar> */}
            <div className='scroll-watcher'></div>

            <div className="curtain-left"></div>
            <div className="curtain-right"></div>

            <main className='mod-div'>

                <Element name='section0' className='mod-section-0' style={slideStyles}>
                    <header className='mod-title'>
                        <div className='animated-heading'>
                            <h1 className='auto-type'>"KREZKET"</h1>
                            <p>inquiries@krezket.net</p>
                        </div>
                    </header>
                </Element>

                {/* <img className='divider' src={divider3} alt="ornate-divider" /> */}

                <Element name='section1' className='mod-section' id='sec-1'>
                    <h2>Intro</h2>
                    <div className='h1-con'>
                        <h1>"Krezket" is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full-Stack Web Developer with a passion for music, art, and design.</h1>
                        <h1>I strive to be a reliable freelance web designer across a wide-range of creative media outlets.</h1>

                    </div>
                </Element>

                <Element name='section2' className='mod-section' id='sec-2'>
                    <h2>Services</h2>
                    <div className='h1-con'>
                        <h1>As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.</h1>

                    </div>
                </Element>

                <Element name='section5' className='mod-section' id='sec-5'>
                    <h2>Contact</h2>
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