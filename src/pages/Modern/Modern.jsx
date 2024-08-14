import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Info from '../Info/Info.jsx'
import './Modern.css';

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

                <div className='initial-div'>
                    <div className='header-div'>
                        <header className='mod-title'>
                            <h1>"KREZKET"</h1>
                            <p>inquiries@krezket.net</p>
                        </header>
                        <nav>
                            <Link className='nav-button' to={'/LogIn'}>
                                <h2>Account</h2>
                            </Link>
                        </nav>
                    </div>
                </div>

		<Info />
	    
                <div name='section5' className='mod-section' id='sec-5'>
                    <h2>Contact</h2>
                    <div className='h1-con'>
                        <a href="https://instagram.com/krezket" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://github.com/krezket" target="_blank" rel="noreferrer">GitHub</a>
                        <Link className='nav-button' to={'/SignUp'}>Create an account</Link>
                    </div>
                </div>

            </main>
        </div>


    )
}
