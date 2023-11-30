// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StyleToggle from '../../components/StyleToggle';
// import heraldry from '../../assets/images/krez-1-b.jpg'
import skull from '../../assets/images/skull.jpeg'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif'
// import rose from '../../assets/backgrounds/blackrose.jpg'
// import divider1 from '../../assets/dividers/jewel_break.gif'
// import divider1 from '../../assets/dividers/bolt.gif'
import './Homepage.css'

export default function Homepage(props) {
    console.log(props)
    const navigate = useNavigate();
    const style = window.localStorage.getItem('style')

    // if (code === "0") {
    //     window.location.pathname = '/'
    // }

    return (
        <>
            {style === 'modern' || props.stateModern === 'modern' ?
                <div className='mod-div'>
                    <StyleToggle setStateOldWeb={props.setStateOldWeb} setStateModern={props.setStateModern} />

                    <header className='mod-header'>Hello</header>
                </div>
                :
                <div className='ow-div'>

                    <header className='ow-header'>

                        <img className='heraldry' id='left' src={skull} alt="krezket" />

                        <div className='ow-h1-con'>
                            <h1 className='ow-h1'>
                                KREZKET
                            </h1>

                            <img src={divider1} alt="ornate-divider" />

                            <p className='ow-p'>
                                Web Design for Artists, Creators, and Musicians.
                            </p>
                        </div>

                        <img className='heraldry' id='right' src={skull} alt="krezket" />

                    </header>

                    <main className='ow-main'>

                        <section className='ow-section-left'>
                            <p>View this website as:</p>
                            <StyleToggle setStateOldWeb={props.setStateOldWeb} setStateModern={props.setStateModern} />

                        </section>
                        <section className='ow-section-mid'>
                            <p>Specify your offer, list your skills. Based on your skills, list down your services, and for each service write down a list of deliverables.</p>
                        </section>
                        <section className='ow-section-right'>
                            <p>Ayo my name is</p>
                        </section>

                    </main>

                    <footer></footer>
                </div>
            }
        </>
    )
}
