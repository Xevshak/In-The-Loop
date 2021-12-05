import React from 'react'
import {Link} from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';



export default function Home () {
    return(
        <div>
            <Link to='/login'>I could be a button</Link>
            <Signup/>
        </div>
    )
}