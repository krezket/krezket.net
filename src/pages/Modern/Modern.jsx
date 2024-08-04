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

            <main className='mod-main'>

                <Element name='section0' style={slideStyles}>
                    <div className='header-div'>
                        <header className='mod-title'>
                            <h1 className='auto-type'>"KREZKET"</h1>
                            <p>inquiries@krezket.net</p>
                        </header>
                        <nav>
                            <Link className='nav-button'>
                                <h2>Log in</h2>
                            </Link>
                            <Link className='nav-button'>
                                <h2>Sign up</h2>
                            </Link>
                        </nav>
                    </div>
                </Element>

                {/* <img className='divider' src={divider3} alt="ornate-divider" /> */}

                <Element name='section1' className='mod-section' id='sec-1'>
                    <h2>Intro</h2>
                    <div className='h1-con'>

                    </div>
                </Element>

                <Element name='section2' className='mod-section' id='sec-2'>
                    <h2>Services</h2>
                    <div className='h1-con'>
                    </div>
                </Element>

                <Element name='section5' className='mod-section' id='sec-5'>
                    <h2>Contact</h2>
                    <div className='h1-con'>
                        <a href="https://instagram.com/krezket" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://github.com/krezket" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
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
}``