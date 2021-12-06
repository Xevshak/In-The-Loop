import React from 'react'
import '../Style/Contact.css'
import UserCard from '../components/UserCard'
import stephimg from '../images/me.jpg'

export default function Contact () {
    const connectBrad = {
        name: "Bradley O'Dell",
        image: stephimg,
        githubURL: '',
        linkedURL: '',
        descripton: ''
      };
      console.log(connectBrad)
      const connectChamo = {
        name: 'Chamo',
        image: '',
        githubURL: '',
        linkedURL: '',
        descripton: ''
      };
      const connectChris = {
        name: 'Christopher Kennard',
        image: '',
        githubURL: '',
        linkedURL: '',
        descripton: ''
      };
      const connectKesh = {
        name: 'Keshav Krishan ',
        image: '',
        githubURL: '',
        linkedURL: '',
        descripton: ''
      };
      const connectSteph = {
        name: 'Stephanie Cortez',
        image: '',
        githubURL: '',
        linkedURL: '',
        descripton: ''
      };
    
    return(
        <div>
            {/* Bradley */}
            <UserCard  teamMember={connectBrad}/>
            {/* Chamo */}
            <UserCard />
            {/* Chris */}
            <UserCard />
            {/* Keshav */}
            <UserCard />
            {/* Steph */}
            <UserCard />
        </div>
    )
}