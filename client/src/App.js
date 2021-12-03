import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Footer from './components/pages/Footer';
import JavaScript from './components/pages/JavaScript';
import Dashboard from './components/pages/Dashboard';
import Header from './components/pages/Header';

function App() {
  return (
    <Router>
      <Header/>
        <div>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/signup"><Signup/></Route>
          <Route exact path="/js"><JavaScript/></Route>
          <Route exact path="/dashboard"><Dashboard/></Route>
        </div>
      <Footer/>  
    </Router>
  );
}

export default App;
