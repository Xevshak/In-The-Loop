import React from 'react'
import creeper from '../assets/images/creeper.png'
import './Forloop.css'
export default function Forloop (props) {
    const creepers = [];

    for (let i = 0; i < props.creep; i++) {
        creepers.push(<img src={creeper} key={i} alt='creeper' className='creeper'></img>)
    }
    return(
        <div>{creepers}</div>
        )
}