import { Link, Element } from 'react-scroll';

export default function NavBar() {
    return (
        <>
            <div className="mod-h1">
                <Link smooth={true} duration={500} to='section0' href=""><h1>KREZKET</h1></Link>
            </div>

            <div className="mod-h2-con">
                <h2>
                    <Link smooth={true} duration={500} to='section1' href="">Intro</Link>
                </h2>

                <h2>
                    <Link smooth={true} duration={500} to='section2' href="">Services</Link>
                </h2>

                {/* <h2>
                                <Link smooth={true} duration={500} to='section4' href="">Clients</Link>
                            </h2> */}

                <h2>
                    <Link smooth={true} duration={500} to='section5' href="">Contact</Link>
                </h2>

                <h2>
                    <a href='/'>Home</a>
                </h2>
            </div>
        </>
    )
}
