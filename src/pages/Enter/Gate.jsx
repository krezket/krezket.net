import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import enter from '../../assets/enter/enter-6.gif'
import enter2 from '../../assets/enter/enter-2.gif'
import './Gate.css'

export default function Gate(props) {
    const navigate = useNavigate();

    const [isOpen1, setIsOpen1] = useState('');
    const [isOpen2, setIsOpen2] = useState('');

    const submitHandlerPage = e => {
        e.preventDefault()

        setIsOpen1('')
        setIsOpen2('')
    }
    const submitHandler = e => {
        e.preventDefault()

        setIsOpen2('')
        isOpen1 != '' ? setIsOpen1('') : setIsOpen1('open-mod')
        // navigate('/modern')
    }
    const submitHandler2 = e => {
        e.preventDefault()

        setIsOpen1('')
        isOpen2 != '' ? setIsOpen2('') : setIsOpen2('open-ow')
    }

    return (
        <div className='homepage'>

            <header className='enter-header'>
                <p>krezket.net</p>
            </header>

            <main className='e-main' >
                <div className='card' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} onClick={submitHandler}>
                    <h3>Modern</h3>
                    <Link className='gif1' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} to={'/modern'}>
                        <img src={enter} alt="enter-modern" />
                    </Link>
                </div>

                <div className='card' id={isOpen2 === '' ? 'closed' : isOpen2 === 'open-ow' ? isOpen2 : ''} onClick={submitHandler2}>
                    <h3>Old Web</h3>
                    <Link className='gif2' id={isOpen1 === '' ? 'closed' : isOpen1 === 'open-mod' ? isOpen1 : ''} to={'/oldweb'}>
                        <img src={enter2} alt="enter-modern" />
                    </Link>
                </div>
            </main>

            <footer>
                <p>Certified Full Stack Web Development</p>
            </footer>

        </div>
    )
}
