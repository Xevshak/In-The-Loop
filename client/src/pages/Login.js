import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from '@mui/material/Button';
import Btnimg from '../images/Btn.png'
import '../Style/Login.css'

const displayName = localStorage.getItem("username");

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  console.log(login, { error });
  console.log('create data');

  const handleFormSubmit = async (event) => {
    console.log('default??')
    event.preventDefault();
    console.log('submit')
    try {
      const mutationResponse = await login({
        variables: { ...formState },
      });
      const token = mutationResponse.data.login.token;
      localStorage.setItem("username", `${mutationResponse.data.login.user.username}`);
      console.log(mutationResponse);
      console.log(token);
      Auth.login(token);
      

    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    
    <div id="loginForm" >
      <p id="passwordTxt">User Email</p>
    <form onSubmit={handleFormSubmit}>
                <input
                id="emailPosition"
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <p id="passwordTxt">Password</p>
                <input
                
                id="passwordPosition"
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                
                 <Button id="LogInBtn" variant="contained" style={{ backgroundImage: `url(${Btnimg})`, boxShadow: 'inset 2px 2px 1px ', border: '2px solid black', borderRadius: 0, cursor: 'pointer', paddingTop:'3px', fontFamily: 'SilkscreenNormal', display:'flex'}} sx={{margin: 1}}>Log In</Button>
                 <Button id="goBackBtn">
                 <pre> 
                    <code>{`<`}</code></pre>
                   Go Back
                    </Button>
              </form>
              </div>
  )};

export default Login;
