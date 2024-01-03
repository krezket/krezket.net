import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import wiz from '../../assets/wizbiz/wizard.gif'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif';
import divider2 from '../../assets/dividers/jewel_break.gif';
import question from '../../assets/gifs/q.gif';
import hammer from '../../assets/gifs/hammer02.gif';
import mail from '../../assets/gifs/mail.gif';
import './OldWeb.css';


export default function OldWeb() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <main className='ow-main'>

                <header className='ow-header'>
                    <img className='heraldry' id='left' src={wiz} alt="krezket" />
                    <div className='h-con'>
                        <div>
                            <img className='divider' src={divider1} alt="ornate-divider" />
                            <h1 className='ow-h1'>
                                KREZKET
                            </h1>
                            <img className='divider' src={divider1} alt="ornate-divider" />
                            <p className='ow-p' id='owp1'>
                                Certified Full-Stack Web Development
                            </p>
                            <p className='ow-p'>
                                inquiries@krezket.net
                            </p>
                        </div>
                        <img className='divider' src={divider2} alt="gem-divider" />
                    </div>
                    <img className='heraldry' id='right' src={wiz} alt="krezket" />
                </header>

                <aside>
                    <p>Back to Homepage:</p>

                    <Link to='/'>Home</Link>
                </aside>

                <article>
                    <section className='ow-sec-1'>
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
                    </section>
                    <section className='ow-sec-2'>
                        <h2>
                            Services
                            <img className='huh' src={hammer} alt="?" />
                        </h2>
                        <p>
                            As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.
                        </p>
                    </section>
                    <section className='ow-sec-3'>
                        <h2>
                            Contact
                            <img className='huh' src={mail} alt="?" />
                        </h2>
                        <p>
                            As a Certified Full-Stack Web Developer, I have the ability to build sites with server side functionality.
                        </p>
                    </section>
                </article>

                <nav>
                    <p>Other Links:</p>
                    <a href="https://instagram.com/krezket" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://github.com/krezket" target="_blank" rel="noreferrer">GitHub</a>
                </nav>

            </main>
        </>
    )
}
