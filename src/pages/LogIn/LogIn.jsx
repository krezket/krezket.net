import React from 'react'
import { Input } from 'react';

export default function LogIn() {
    return (
        <main className='body'>

            <div className='initial-div'>
                <div className='header-div'>
                    <header className='mod-title'>
                        <h1 className='auto-type'>"LOG IN"</h1>
                        <p>inquiries@krezket.net</p>
                    </header>
                    <nav>
                    	<input placeholder='Username'/>
                    	<input placeholder='Password'/>
                    </nav>
                </div>
            </div>
        </main>
    )
}
