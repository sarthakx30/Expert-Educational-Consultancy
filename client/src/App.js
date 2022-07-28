import React, { useState, createContext } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Footer from './components/footer';
import FAQ from './pages/faq';
import Colleges from './pages/colleges';
import Account from './pages/account';
import Logout from './'
import { makeStyles } from '@material-ui/core';
import { UserContext } from './UserContext';

import './App.css';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Nunito Sans",
    fontWeight: "600"
  }
}));

// const User=createContext(null);
function App() {
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles();
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user,setUser}}>
      <div className={classes.App}>
        <Router>
          <Navbar navbar={navbar} setNavbar={setNavbar} />
          <Routes>
            <Route exact path="/" element={<Home navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/about" element={<About navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/login" element={<Login navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/register" element={<Register navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/reviews" element={<FAQ navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/colleges" element={<Colleges navbar={navbar} setNavbar={setNavbar} />} />
            <Route path="/account" element={<Account navbar={navbar} setNavbar={setNavbar} />} />
            {/* <Route path="/logout" element={<Logout/>} /> */}
          </Routes>
        </Router>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
