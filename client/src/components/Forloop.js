import React from 'react'
import '../Style/Forloop.css'
import creeperimg from '../images/creeper.png'

export default function Forloop (props) {
    const creepers = [];

    for (let i = 0; i < props.creep; i++) {
        creepers.push(<img src={creeperimg} key={i} alt='creeper' className='creeper'></img>)
    }
    return(
        <div>{creepers}</div>
        )
}