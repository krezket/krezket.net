// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import skull from '../../assets/images/skull.jpeg';
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif'
import question from '../../assets/gifs/q.gif'
// import heraldry from '../../assets/images/krez-1-b.jpg'
// import rose from '../../assets/backgrounds/blackrose.jpg'
// import divider1 from '../../assets/dividers/jewel_break.gif'
// import divider1 from '../../assets/dividers/bolt.gif'
import './Homepage.css'

export default function Homepage(props) {
    console.log(props)
    const navigate = useNavigate();
    const style = window.localStorage.getItem('style')

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

    // if (code === "0") {
    //     window.location.pathname = '/'
    // }

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
                            <a href="">Contact us</a>
                        </h2>
                    </aside>
                    <div className='mod-div'>
                        <div className='mod-con'>
                            <header className='mod-header'>
                                <h1>KREZKET.NET</h1>
                                <div className='style'>
                                    <button onClick={oldWebToggle}>Old Web</button>
                                    <button onClick={modernToggle}>Modern</button>
                                </div>
                            </header>
                            <Element name='section1' className='mod-main'>

                            </Element>

                        </div>
                    </div>
                </>
                :
                <div className='ow-div'>

                    <header className='ow-header'>

                        <img className='heraldry' id='left' src={skull} alt="krezket" />

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

                        <img className='heraldry' id='right' src={skull} alt="krezket" />

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
