import React,{useState} from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Footer from './components/footer';
import FAQ from './pages/faq';
import {makeStyles} from '@material-ui/core';

import './App.css';

const useStyles = makeStyles(() => ({
  App :{
      // height : '100vh',
      backgroundColor :"#FFFFFF",
      fontFamily:"Nunito Sans",
      fontWeight:"600"
    }
}));


function App() {
  const [navbar,setNavbar]=useState(false);
  const classes=useStyles();
  return (
    <div className={classes.App}>
      <Router>
        <Navbar navbar={navbar} setNavbar={setNavbar} />
        <Routes>
          <Route exact path="/" element={<Home navbar={navbar} setNavbar={setNavbar} />} />
          <Route path="/about" element={<About navbar={navbar} setNavbar={setNavbar} />} />
          <Route path="/login" element={<Login navbar={navbar} setNavbar={setNavbar} />} />
          <Route path="/register" element={<Register navbar={navbar} setNavbar={setNavbar} />} />
          <Route path="/reviews" element={<FAQ navbar={navbar} setNavbar={setNavbar} />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
