import React from 'react'
import './style.css'

export default function CcWeather() {
    return (
        <div className='cc-body'>
            <header>
                <h1 className="ccheader">Crazy Cat Weather</h1>
            </header>

            <main id="ccmain">
                <form id="search-form">
                    <h4>Search for Cities</h4>
                    <div className="search">
                        <input id="search-input" className="text-input" type="text" />
                        <button>Search</button>
                    </div>
                </form>

            </main>
            <section>
                <button id="secret">Press Here</button>
                <div id="cat"></div>
            </section>
        </div>
    )
}
