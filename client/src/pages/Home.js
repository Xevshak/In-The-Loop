import React from 'react'
import { Link } from 'react-router-dom'
import Btnimg from '../images/Btn.png'
import '../Style/Home.css'
import Footer from '../components/Footer'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Box  from '@mui/material/Box'
import Card from '@mui/material/Card'
import { CardContent } from '@mui/material'

export default function Home () {
    return(
        <div>
            <Typography id='homeText' style={{fontFamily: 'Minecraft', color: 'white'}}>Learn How To Code The Fun Way</Typography>

            <Box>
            <Link to={`/login`} style={{textDecoration: 'none', color: 'white', fontFamily: 'SilkscreenNormal'}}><Button variant="contained" className='loginBtn' style={{  backgroundImage: `url(${Btnimg})`, boxShadow: 'inset 2px 2px 1px #e0e0e0', border: '2px solid black', borderRadius: 0, cursor: 'pointer', paddingTop:'3px' }} sx={{margin: 1}}>Login</Button></Link>

            <Link to={`/signup`} style={{textDecoration: 'none', color: 'white', fontFamily: 'SilkscreenNormal'}}><Button variant="contained" className='loginBtn' style={{ backgroundImage: `url(${Btnimg})`, boxShadow: 'inset 2px 2px 1px ', border: '2px solid black', borderRadius: 0, cursor: 'pointer', paddingTop:'3px' }} sx={{margin: 1}}>Sign Up</Button></Link>
            </Box>

            <Card sx={{margin:1}} style={{backgroundColor: 'darkgreen'}}>
                <CardContent style={{textAlign:'center'}}>
                    <Typography variant="h5" component="div">CSS TUTORIAL</Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">coming soon!</Typography>
                </CardContent>
            </Card>

            <Card sx={{margin:1}} style={{backgroundColor: 'darkgreen'}}>
                <CardContent style={{textAlign:'center'}}>
                    <Typography variant="h5" component="div">
                    HTML TUTORIAL
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    coming soon!
                    </Typography>
                </CardContent>
            </Card>
            <Footer/>
        </div>
    )
}