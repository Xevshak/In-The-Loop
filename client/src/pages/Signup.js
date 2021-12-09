import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';


import swal from 'sweetalert';
import Auth from '../utils/auth';

import Btnimg from '../images/Btn.png'
import Button from '@mui/material/Button'
import '../Style/Signup.css'

const displayName = localStorage.getItem("username");

function Signup(props) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // let myGreeting = setTimeout(() => {
    //   alert('Hello, Mr. Universe!');
    // }, 2000);
    // console.log(myGreeting);
    

    try {
      const { data } = await addUser({
        variables: { username: formState.username,  email: formState.email, password: formState.password},
      });
      console.log(formState);

      Auth.login(data.addUser.token);
      localStorage.setItem("username", `${formState.username}`);
    } catch (e) {
      console.error(e);
      swal("Oops! Something went wrong are sure you are not already a member?");
    }
  };

  return (

            <div id='signUp'>
              <form onSubmit={handleFormSubmit} sx={{margin:1}}>
              <p id="passwordTxt2" >User Name</p>
                <input 
                  id= 'userPos'

                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                  style={{}}
                  sx={{margin:1}}
                />
                <p id="passwordTxt2" >User Email</p>
                <input
                  id= 'emailPos'
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <p id="passwordTxt2" >Password</p>
                <input
                  id= 'passPos'
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />

                
                <Button variant="contained" type="submit" id='signBtn1' style={{ backgroundImage: `url(${Btnimg})`, boxShadow: 'inset 2px 2px 1px #e0e0e0', border: '2px solid black', borderRadius: 0, cursor: 'pointer', paddingTop:'3px', fontFamily: 'SilkscreenNormal', display:'flex' }} sx={{margin: 1}}>Sign Up</Button>
                <Link to={"/"}><Button id="goBackBtn2">
                 <pre> 
                    <code>{`<`}</code></pre>
                   Go Back
                    </Button></Link>

              </form>

            
            </div>
            
  )
};

export default Signup;

// <Link to={`/login`} style={{textDecoration: 'none', color: 'white', fontFamily: 'SilkscreenNormal'}}