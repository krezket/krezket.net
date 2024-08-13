import { Link, useNavigate } from 'react-router-dom';
import enter from '../../assets/enter/enter-6.gif'
import enter2 from '../../assets/enter/enter-2.gif'
import enter3 from '../../assets/enter/enter-7.gif'
import enter4 from '../../assets/enter/enter-8.gif'
import './Info.css'

export default function Info(props) {
    const navigate = useNavigate();

    return (
        <>

            <div className='title'>
                <p>Krezket is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full-Stack Web Developer with a passion for music, art, and design.</p>
                <p>I strive to be a reliable freelance web designer across a wide-range of creative media outlets.</p>
            </div>

            <div className='homepage'>
                    <h2>Front-End Projects</h2>
                <main className='fe-main'>
                    <section className='door'  >
                        <h3>Modern</h3>
                        <div className='back' id='back1'>
                            <Link className='gif'  to={'/modern'}>
                                <img src={enter} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>

                    <section className='door' >
                        <h3>Old Web</h3>
                        <div className='back' id='back2'>
                            <Link className='gif'  to={'/oldweb'}>
                                <img src={enter4} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>

                    <section className='door' >
                        <h3>Kreznote</h3>
                            <Link to={'/Kreznote'}>
                                <img src={enter4} alt="enter-modern" />
                            </Link>
                        <div className='back' id='back2'>
                            <Link className='gif'  to={'/Kreznote'}>
                                <img src={enter4} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>
                </main>
            </div>

            <div className='homepage'>
                <main className='be-main'>
                    <section className='door' >
                        <h3>Blog</h3>
                        <div className='back' id='back3'>
                            <Link className='gif'  to={'/blog'}>
                                <img src={enter2} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>

                    <section className='door' >
                        <h3>Weather</h3>
                        <div className='back' id='back4'>
                            <Link className='gif'  to={'/weather'}>
                                <img src={enter3} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
