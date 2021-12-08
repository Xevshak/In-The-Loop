import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';


import swal from 'sweetalert';
import Auth from '../utils/auth';

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
    
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                id="submitSig"  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >Submit
                  {/* <Link to={`/js`}>Submit</Link>  */}
                </button>
              </form>
            
  )
};

export default Signup;