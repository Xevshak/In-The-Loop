import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Home.css'

//import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

export default function Home () {
    return(
        <div>
            <Button variant="contained"><Link to={`/login`}>Login</Link></Button>
            <Button variant="contained"><Link to={`/signup`}>Sign Up</Link></Button>
        </div>
    )
}