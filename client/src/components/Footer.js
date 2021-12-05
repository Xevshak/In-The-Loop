import React from 'react'
import "../Style/Footer.css"
export default function Footer () {
    return(
        <div>
        <footer className="contribute">
        <ul className="contributors">
            <p>Back End Developers</p>
            <li>Bradley</li>
            <li>Chamo</li>
            <li>Keshav</li>
        </ul>
        <ul className='contributors'>    
            <p>Front End Developers</p>
            <li>Christopher</li>
            <li>Stephanie</li>
        </ul>
        </footer>
    </div>
    )
}

