import { useNavigate } from 'react-router-dom';
import enter from '../../assets/enter/enter-6.gif'
import enter2 from '../../assets/enter/enter-2.gif'
import './Gate.css'

export default function Gate(props) {
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault()

        navigate('/modern')
    }
    const submitHandler2 = e => {
        e.preventDefault()

        navigate('/oldweb')
    }

    return (
        <div className='homepage'>
            <header className='enter-header'>
                <p>krezket.net</p>
            </header>
            <main className='e-main'>
                <div className='card' id='enter-mod' onClick={submitHandler}>
                    <h3>Modern</h3>
                </div>
                <div className='card' id='enter-ow' onClick={submitHandler2}>
                    <h3>Old Web</h3>
                </div>
            </main>
            <footer>
                <p>Certified Full Stack Web Development</p>
            </footer>
        </div>
    )
}
