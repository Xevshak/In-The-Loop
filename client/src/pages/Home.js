import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Home.css'

//import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box  from '@mui/material/Box'


export default function Home () {

    return(
        <div>
            <Box>
                <Button variant="contained" className='loginBtn' style={{ background: '#C7BCB9' }} sx={{margin: 1}}><Link to={`/login`}>Login</Link></Button>
                <Button variant="contained" className='loginBtn' style={{ background: '#C7BCB9' }} sx={{margin: 1}}><Link to={`/signup`}>Sign Up</Link></Button>
            </Box>
        </div>
    )
}