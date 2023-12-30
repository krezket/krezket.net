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
                <div className='enter' id='enter-mod'>
                    <h3>Modern</h3>
                    <img src={enter} alt="enter" onClick={submitHandler} />
                </div>
                <div className='enter' id='enter-ow'>
                    <h3>Old Web</h3>
                    <img src={enter2} alt="enter" onClick={submitHandler2} />
                </div>
            </main>
            <footer>
                <p>Certified Full Stack Web Development</p>
            </footer>
        </div>
    )
}
