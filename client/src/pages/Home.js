import React from 'react'
import { Link } from 'react-router-dom'
export default function Home () {
    return(
        <div>
            
            <button type='submit'> <Link to={`/login`}>Login</Link></button>
            <button type='submit'><Link to={`/signup`}>Sign Up</Link></button>
        </div>
    )
}