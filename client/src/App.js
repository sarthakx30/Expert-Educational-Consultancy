import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Footer from './components/footer';
import Reviews from './pages/reviews';
import {makeStyles} from '@material-ui/core';

// import './App.css';

const useStyles = makeStyles(() => ({
  App :{
      // height : '100vh',
      backgroundColor :"#FFFFFF"
    }
}));


function App() {
  const classes=useStyles();
  return (
    <div className={classes.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reviews" element={<Reviews />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
