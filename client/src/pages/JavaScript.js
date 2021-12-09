import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Forloop from '../components/Forloop'
import Quiz1 from '../components/Quiz1';
import Quiz2 from '../components/Quiz2'
import Quiz3 from '../components/Quiz3'
import '../Style/JavaScript.css'

const displayName = localStorage.getItem("username");

export default function JavaScript () {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue (e.target.value)
    }
    return(
        <div>
            <h1 id='username'>{displayName} is In the Loop!</h1>
            <Navbar/>
            <div id="creepBox"><Forloop creep={value}/></div>
                <pre className='cardFor'>
                    <code>
                        <span id="forText">
{`for (let i = 0; i <`}
                        </span> 
                        <span> 
                            <form>
                                <label id="forDrop">            
                                    <select value={value} onChange={handleChange}>
                                    <option value='0'>0</option>
                                    <option value='5'>5</option>
                                    <option value='10'>10</option>
                                    <option value='3'>3</option>
                                    <option value="1">1</option>
                                    </select>
                                </label>          
                            </form>
                        </span>
                        <span id="forText2">
{`; i++) { `}</span><span id='forText3'>
    {`creeper += creeper[i];`}</span><span id="bracket">{`
}`}</span>
                </code>
            </pre>
            <Quiz1/>
            <Quiz2/>
            <Quiz3/>

        </div>
    )
}