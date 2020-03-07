import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Fair from './pages/Fair'
import Prelarv from './pages/Prelarv'
import Contact from './pages/Contact'
import Student from './pages/Student'
import Company from './pages/Company'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/fair' component={Fair} />
      <Route exact path='/prelarv' component={Prelarv} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/student' component={Student} />
      <Route exact path='/company' component={Company} />
    </BrowserRouter>
  );
}

export default App;
