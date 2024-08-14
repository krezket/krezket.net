import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import enter from '../../assets/enter/enter-6.gif'
import enter2 from '../../assets/enter/enter-2.gif'
import enter3 from '../../assets/enter/enter-7.gif'
import enter4 from '../../assets/enter/enter-8.gif'
import Navbar from '../../components/NavBar/NavBar.jsx';
import './Info.css'
import './Modern.css';
import NavBar from '../../components/NavBar/NavBar.jsx';

export default function Modern(props) {
    console.log(props)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    window.sessionStorage.setItem('ani', true);
    const ani = window.sessionStorage.getItem('ani')

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
            {
                ani === true ?
                    <></>
                    :
                    <>

                        <div className="curtain-left"></div>
                        <div className="curtain-right"></div>
                    </>
            }

            <main className='mod-main'>
                <NavBar/>

                <Element name='section2' className='homepage'>
                    <h2>Front-End Projects</h2>

                    <main className='fe-main'>

                        <section className='door door-1'  >
                            <h3>Modern</h3>
                            <Link className='gif'  to={'/modern'}>
                                <img src={enter} alt="enter-modern" />
                            </Link>
                        </section>

                        <section className='door door-2' >
                            <h3>Old Web</h3>
                            <Link className='gif'  to={'/oldweb'}>
                                <img src={enter4} alt="enter-modern" />
                            </Link>
                        </section>

                        <section className='door door-3' >
                            <h3>Kreznote</h3>
                            <Link className='gif'  to={'/Kreznote'}>
                                <img src={enter4} alt="enter-modern" />
                            </Link>
                        </section>
                    </main>
                </Element>

                <Element name='section1' className='title'>
                    <p>Krezket is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full-Stack Web Developer with a passion for music, art, and design.</p>
                    <p>I strive to be a reliable freelance web designer across a wide-range of creative media outlets.</p>
                </Element>

                <div className='homepage'>
                    <h2>Back-End Projects</h2>

                    <main className='be-main'>

                        <section className='door door-b1' >
                            <h3>Blog</h3>
                            <Link className='gif'  to={'/blog'}>
                                <img src={enter2} alt="enter-modern" />
                            </Link>
                        </section>

                        <section className='door door-b2' >
                            <h3>Weather</h3>
                            <Link className='gif'  to={'/weather'}>
                                <img src={enter3} alt="enter-modern" />
                            </Link>
                        </section>

                    </main>
                </div>

                <Element name='section5' className='mod-section' id='sec-5'>
                    <h2>Contact</h2>
                    <div className='h1-con'>
                        <a href="https://instagram.com/krezket" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://github.com/krezket" target="_blank" rel="noreferrer">GitHub</a>
                        <Link className='nav-button' to={'/SignUp'}>Create an account</Link>
                    </div>
                </Element>

            </main>
        </div>


    )
}
