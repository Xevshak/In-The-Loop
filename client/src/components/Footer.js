import React from 'react'
import "../Style/Footer.css"
export default function Footer () {
    return(
        <div>
        <footer className="contribute">
        <ul className="contributors">
            <p>Back End Developers</p>
            <li>Bradley</li>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
            <li>Chamo</li>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
            <li>Keshav</li>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
        </ul>
        <ul className='contributors'>    
            <p>Front End Developers</p>
            
            <li>Christopher</li>
            <a href="www.linkedin.com/in/christopher-kennard-13a479213" target="_blank" rel="noreferrer"  >
            <i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/chris79kennard" target="_blank" rel="noreferrer" >
            <i class="fab fa-github"></i></a>

            <li>Stephanie</li>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"  >
            <i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/CortezStephanie" target="_blank" rel="noreferrer" >
            <i class="fab fa-github"></i></a>

        </ul>
        </footer>
    </div>
    )
}

