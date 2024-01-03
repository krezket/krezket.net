import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import enter from '../../assets/enter/enter-6.gif'
import enter2 from '../../assets/enter/enter-2.gif'
import './Gate.css'

export default function Gate(props) {
    const navigate = useNavigate();

    const [isOpen1, setIsOpen1] = useState('');
    const [isOpen2, setIsOpen2] = useState('');
    
    const submitHandler = e => {
        e.preventDefault()

        setIsOpen2('')
        isOpen1 != '' ? setIsOpen1('') : setIsOpen1('open-mod')
    }
    const submitHandler2 = e => {
        e.preventDefault()

        setIsOpen1('')
        isOpen2 != '' ? setIsOpen2('') : setIsOpen2('open-ow')
    }

    return (
        <>
            <div className='title'>
                <p>Certified Full-Stack Web Development</p>
                <h1>KREZKET</h1>
            </div>
            
            <div className='title'>
                <p>
                    Krezket is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full-Stack Web Developer with a passion for music, art, and design.
                </p>
                <p>
                    I strive to be a reliable freelance web designer across a wide-range of creative media outlets.
                </p>
            </div>

            <div className='homepage'>
                <main className='e-main'>
                    <section className='door' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} onClick={submitHandler}>
                        <div className='back' id='back1'>
                            <Link className='gif1' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} to={'/modern'}>
                                <img src={enter2} alt="enter-modern" />
                            </Link>
                        </div>
                            <h3>Modern</h3>
                    </section>

                    <section className='door' id={isOpen2 === '' ? 'closed' : isOpen2 === 'open-ow' ? isOpen2 : ''} onClick={submitHandler2}>
                        <div className='back' id='back2'>
                            <Link className='gif2' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} to={'/oldweb'}>
                                <img src={enter} alt="enter-modern" />
                            </Link>
                        </div>
                            <h3>Old Web</h3>
                    </section>
                </main>

                <footer>
                    <p>inquiries@krezket.net</p>
                </footer>
            </div>
        </>
    )
}
