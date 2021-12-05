import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Forloop from '../components/Forloop'
import Quiz from '../components/Quiz';
import "../Style/JavaScript.css"
export default function JavaScript () {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue (e.target.value)
    }
    return(
        <div>
            <Navbar/>
            <div id="creepBox"><Forloop creep={value}/></div>
                <pre className='card'>
                    <code>
                        <span>
{`for (let i = 0; i <`}
                        </span> 
                        <span> 
                            <form>
                                <label>            
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
                        <span>
{`; i++) {
    creeper += creeper[i];
}`}</span>
                </code>
            </pre>
            <Quiz/>

        </div>
    )
}