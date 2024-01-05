import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import enter from '../../assets/enter/enter-6.gif'
import enter2 from '../../assets/enter/enter-2.gif'
import enter3 from '../../assets/enter/enter-7.gif'
import enter4 from '../../assets/enter/enter-8.gif'
import './Gate.css'

export default function Gate(props) {
    const navigate = useNavigate();

    const [isOpen1, setIsOpen1] = useState('');
    const [isOpen2, setIsOpen2] = useState('');
    const [isOpen3, setIsOpen3] = useState('');
    const [isOpen4, setIsOpen4] = useState('');

    const submitHandler = e => {
        e.preventDefault()

        setIsOpen2('')
        setIsOpen3('')
        setIsOpen4('')
        isOpen1 != '' ? setIsOpen1('') : setIsOpen1('open-mod')
    }
    const submitHandler2 = e => {
        e.preventDefault()

        setIsOpen1('')
        setIsOpen3('')
        setIsOpen4('')
        isOpen2 != '' ? setIsOpen2('') : setIsOpen2('open-ow')
    }
    const submitHandler3 = e => {
        e.preventDefault()

        setIsOpen1('')
        setIsOpen2('')
        setIsOpen4('')
        isOpen3 != '' ? setIsOpen3('') : setIsOpen3('open-bl')
    }
    const submitHandler4 = e => {
        e.preventDefault()

        setIsOpen1('')
        setIsOpen2('')
        setIsOpen3('')
        isOpen4 != '' ? setIsOpen4('') : setIsOpen4('open-we')
    }

    return (
        <>
            <div className='title'>
                <p>Certified Full-Stack Web Development</p>
                <h1>KREZKET</h1>
            </div>

            <div className='title'>
                <p>Krezket is a brand / platform for myself, Anthony Guerrero. I'm a Certified Full-Stack Web Developer with a passion for music, art, and design.</p>
                <p>I strive to be a reliable freelance web designer across a wide-range of creative media outlets.</p>
            </div>

            <div className='homepage'>
                <main className='fe-main'>
                    <section className='door' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} onClick={submitHandler}>
                        <h3>Modern</h3>
                        <div className='back' id='back1'>
                            <Link className='gif1' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} to={'/modern'}>
                                <img src={enter} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>

                    <section className='door' id={isOpen2 === '' ? 'closed' : isOpen2 === 'open-ow' ? isOpen2 : ''} onClick={submitHandler2}>
                        <h3>Old Web</h3>
                        <div className='back' id='back2'>
                            <Link className='gif2' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} to={'/oldweb'}>
                                <img src={enter4} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>

                </main>
            </div>

            <div className='homepage'>
                <main className='be-main'>
                    <section className='door' id={isOpen3 === '' ? 'closed' : isOpen3 === 'open-bl' ? isOpen3 : ''} onClick={submitHandler3}>
                        <h3>Blog</h3>
                        <div className='back' id='back3'>
                            <Link className='gif3' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} to={'/blog'}>
                                <img src={enter2} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>

                    <section className='door' id={isOpen4 === '' ? 'closed' : isOpen4 === 'open-we' ? isOpen4 : ''} onClick={submitHandler4}>
                        <h3>Weather</h3>
                        <div className='back' id='back4'>
                            <Link className='gif4' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} to={'/weather'}>
                                <img src={enter3} alt="enter-modern" />
                            </Link>
                        </div>
                    </section>
                </main>
            </div>

            <footer>
                <p>inquiries@krezket.net</p>
            </footer>
        </>
    )
}
