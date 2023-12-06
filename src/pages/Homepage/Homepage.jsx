import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import wiz from '../../assets/wizbiz/wizard.gif'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif'
import question from '../../assets/gifs/q.gif'
// import divider1 from '../../assets/dividers/jewel_break.gif'
// import divider1 from '../../assets/dividers/bolt.gif'
import './Homepage.css'

export default function Homepage(props) {
    console.log(props)
    const [animate, setAnimate] = useState(false);
    const style = window.localStorage.getItem('style')

    // ANIMATE ON ARRIVAL
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    // ANIMATE ON CLICK
    const commonLogic = () => {
        setAnimate(false);
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 500);

        return () => clearTimeout(timeout);
    };

    // SWITCH TO MODERN STYLE
    const modernToggle = e => {
        e.preventDefault()
        if (style === 'old-web') {
            commonLogic();
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
                        <div className='mod-con'>
                            <header className='mod-title'>
                                <div className='style'>
                                    <button onClick={oldWebToggle}>Old Web</button>
                                    <button onClick={modernToggle}>Modern</button>
                                </div>
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
                                As a Certified Full-Stack Web Developer, I have the ability to build sites with behind the scenes, server side functionality.
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
                        </div>

                        <img className='heraldry' id='right' src={wiz} alt="krezket" />

                    </header>

                    <main className='ow-main'>

                        <section className='ow-section-left'>
                            <p>View this website as:</p>

                            <div className='style'>
                                <button onClick={oldWebToggle}>Old Web</button>
                                <button onClick={modernToggle}>Modern</button>
                            </div>
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
                                    As a Certified Full-Stack Web Developer, I have the ability to build sites with behind the scenes, server side functionality.
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
