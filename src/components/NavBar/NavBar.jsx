import { Link, Element } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    return (
        <header className='mod-header'>
                <div className='initial-div'>
                    <div className='header-div'>
                        <header className='mod-title'>
                            <h1>"KREZKET"</h1>
                            <p>inquiries@krezket.net</p>
                        </header>
                    </div>
                </div>
            <div className='link-con'>
                <h2>
                    <Link smooth={true} duration={500} to='section1' href="">Info</Link>
                </h2>

                <h2>
                    <Link smooth={true} duration={500} to='section2' href="">Projects</Link>
                </h2>

                {/* <h2>
                    <Link smooth={true} duration={500} to='section4' href="">Clients</Link>
                </h2> */}

                <h2>
                    <Link smooth={true} duration={500} to='section5' href="">Contact</Link>
                </h2>

                <h2>
                    <NavLink to='/login'>Log in</NavLink>
                </h2>
            </div>
    </header>
    )
}
