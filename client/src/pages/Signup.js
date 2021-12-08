import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

<<<<<<< HEAD
=======
const displayName = localStorage.getItem("username");

>>>>>>> cee4c48934fb1109ac29eca7f3050e7643cb46ef
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
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { username: formState.username,  email: formState.email, password: formState.password},
      });
      console.log(formState);

      Auth.login(data.addUser.token);
      localStorage.setItem("username", `${formState.username}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
<<<<<<< HEAD
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
              {data ?(
              <p>
                Success! You may now head{' '}
                
              </p>
            ) : (
=======
    
>>>>>>> cee4c48934fb1109ac29eca7f3050e7643cb46ef
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
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >Submit
                  {/* <Link to={`/dashboard`}>Submit</Link>  */}
                </button>
              </form>
            
  )
};

export default Signup;