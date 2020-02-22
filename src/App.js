import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
