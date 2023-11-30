import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LightDarkToggle from '../../components/LightDark/LightDarkToggle'
// import flur from '../../assets/Heraldry/flur.gif'
import pillar from '../../assets/fire/pillarfire.gif'
import pillar1 from '../../assets/fire/fire-4.gif'
import divider1 from '../../assets/dividers/SilverGlitterBottem.gif'
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
            {style === 'modern' && props.stateModern === 'modern' ?
                <div className='modern-div'>
                    <LightDarkToggle setStateOldWeb={props.setStateOldWeb} setStateModern={props.setStateModern} />

                    <div>Hello</div>
                </div>
                :
                <div className='oldweb-div'>

                    <LightDarkToggle setStateOldWeb={props.setStateOldWeb} setStateModern={props.setStateModern} />

                    <header className='header' id='dark-header'>

                        <div className='h1-con'>

                            <h1 className='light-h1'>
                                KREZKET
                            </h1>

                            <img src={divider1} alt="ornate-divider" />

                            <p className='light-p'>
                                Web Design for Artists, Creators, and Musicians.
                            </p>
                        </div>

                    </header>

                    <main className='main' id='dark-main'>

                        <section></section>
                        <section className='light-section-mid'>
                            <p>Specify your offer, list your skills. Based on your skills, list down your services, and for each service write down a list of deliverables.</p>
                        </section>
                        <section></section>

                    </main>

                    <footer></footer>
                </div>
            }
        </>
    )
}
