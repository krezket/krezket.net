import React, { useEffect } from 'react';
import './Kreznote.css'

export default function Kreznote() {

  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <main className='k-main'>
        <h1>Kreznote</h1>
    </main>
  )
}
