import React from 'react'
import wiz from '../../assets/wizbiz/wizard.gif'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif';
import divider2 from '../../assets/dividers/jewel_break.gif';
// import divider3 from '../../assets/dividers/bolt.gif';
// import divider3 from '../../assets/dividers/aniaanderas.gif';
import question from '../../assets/gifs/q.gif';
import hammer from '../../assets/gifs/hammer02.gif';
import mail from '../../assets/gifs/mail.gif';
import './OldWeb.css';


export default function OldWeb() {
    return (
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
    )
}
