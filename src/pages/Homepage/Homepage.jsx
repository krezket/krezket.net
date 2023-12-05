import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import wiz from '../../assets/wizbiz/wizard.gif'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif'
import question from '../../assets/gifs/q.gif'
// import divider1 from '../../assets/dividers/jewel_break.gif'
// import divider1 from '../../assets/dividers/bolt.gif'
import './Homepage.css'

export default function Homepage(props) {
    console.log(props)
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);
    const style = window.localStorage.getItem('style')

    useEffect(() => {
        const timeout = setTimeout(() => {
          setAnimate(true);
        }, 500);
    
        return () => clearTimeout(timeout);
      }, []);

    const modernToggle = e => {
        e.preventDefault()

        window.localStorage.setItem('style', 'modern')

        props.setStateOldWeb("")
        props.setStateModern("modern")
    }

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
                    <aside className='mod-aside'>
                        <h1>
                            KREZKET
                        </h1>
                        <h2>
                            <Link smooth={true} duration={500} to='section1' href="">Who We Are</Link>
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
                            <Link smooth={true} duration={500} to='section5' href="">Contact us</Link>
                        </h2>
                    </aside>
                    <div className='mod-div'>
                        <div className='mod-con'>
                            <header className='mod-header'>
                                <h1 className={`animated-heading ${animate ? 'animate-up' : ''}`}>KREZKET.NET</h1>
                                <div className='style'>
                                    <button onClick={oldWebToggle}>Old Web</button>
                                    <button onClick={modernToggle}>Modern</button>
                                </div>
                            </header>
                            <Element name='section1' className='mod-main'>

                            </Element>

                            <Element name='section2' className='mod-main'>

                            </Element>

                            <Element name='section3' className='mod-main'>

                            </Element>

                            <Element name='section4' className='mod-main'>

                            </Element>

                            <Element name='section5' className='mod-main'>

                            </Element>
                        </div>
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
                            <div className='style-2'>
                                <button onClick={oldWebToggle}>Old Web</button>
                                <button onClick={modernToggle}>Modern</button>
                            </div>
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
                            <h2>
                                <img className='huh' src={question} alt="?" />
                                What is krezket.net
                                <img className='huh' src={question} alt="?" />
                            </h2>
                            <p>
                                My name is Anthony Guerrero. I am a full stack web developer
                            </p>
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
