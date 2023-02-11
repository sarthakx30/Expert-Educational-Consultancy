import React, { useState, useEffect, useRef, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@mui/material';
import { Toolbar, Container, AppBar, Typography, Grow, Grid, CssBaseline, makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

import DrawerMenu from "./drawer";
import logo from '../images/logo_white.png';
import "../App.css";
import arrowIcon from '../images/icons/icons8-chevron-left-50.png';
import texturedImage from "../images/textured_3_edit.png";

import Cookies from 'js-cookie';
import axios from '../api/axios';
const LOGOUT_URL = '/api/v1/logout';

const useStyles = makeStyles((theme) => ({
    navlinks: {
        // marginLeft: theme.spacing(10),
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "#fea905",
        fontSize: "20px",
        // marginLeft: theme.spacing(10),
        "&:hover": {
            color: "hotpink",
            borderBottom: "1px solid hotpink",
        },
    },
    logoText: {
        color: "#fea905",
        fontSize: "20px",
        position: "relative",
        zIndex: 100,
        marginLeft: "20px",
        fontFamily: 'Revue'
    },
    navbar: {
        background: "transparent",
        position: "relative",
        top: "180px",
    },
    active: {
        background: `url(${texturedImage})`,
        position: "fixed",
        top: 0,
    }
}));

const Navbar = ({ navbar, setNavbar }) => {
    // const [navbar, setNavbar] = useState(false);
    const [location, setLocation] = useState("/");
    const changeNavbar = () => {
        if (window.scrollY > 250 || window.location.pathname !== '/') {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeNavbar);
    // useEffect(() => {
    //     // document.getElementsByClassName("link").addEventListener('click', function(){
    //     //     console.log("here")
    //     // });
    // }, [window.scrollY, window.location])
    const changeNavbarAlt = () => {
        // console.log(location, window.location.pathname);
        if (window.location.pathname === location) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    const classes = useStyles();
    const theme = useTheme();
    const focus = useRef();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const { user, setUser, cookieToken, setCookieToken, course, setCourse } = useContext(UserContext);
    return (
        <div>
            <CssBaseline />
            <div ref={focus}></div>
            {isMobile ? (<DrawerMenu />) :
                (<>
                    {window.location.pathname === "/" ? (<>
                        <Typography style={{ marginTop: "10px", fontSize: "25px" }} className={classes.logoText}>Expert Educational</Typography>
                        <Typography style={{ fontSize: "40px" }} className={classes.logoText}>Consultancy</Typography>
                    </>) : (<></>)
                    }
                    {/* <img src={logo} width="100%" style={{padding:"10px",backgroundColor:"#faecce"}}/> */}
                    <AppBar id="navbar" elevation={0} className={navbar ? `${classes.navbar} ${classes.active}` : `${classes.navbar}`} >
                        <Toolbar>
                            <div className={classes.navlinks}>
                                <Link to="/" onClick={() => { focus.current.scrollIntoView({ behavior: 'smooth' }); setLocation("/"); changeNavbarAlt(); }} className={classes.link}>
                                    {navbar ? (<div onClick={() => focus.current.scrollIntoView({ behavior: 'smooth' })}><Typography style={{ marginLeft: 0, fontSize: "15px", fontWeight: "700" }} className={classes.logoText}>Expert Educational</Typography>
                                        <Typography style={{ marginLeft: 0, fontSize: "23px", fontWeight: "300" }} className={classes.logoText}>Consultancy</Typography></div>) : (<p style={{ position: "relative", top: "2px", marginBottom: "4px" }}>Home</p>)}
                                </Link>
                                <Link to="/about" className={classes.link}>
                                    About
                                </Link>
                                {/* <Link to="/" className={classes.link}>
                                    <SplitButton
                                        key="down"
                                        id={`dropdown-button-drop-down-centered`}
                                        drop="down-centered"
                                        variant="secondary"
                                        title={course}
                                    >
                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-end`}
                                            drop="end"
                                            variant="secondary"
                                            title={`NEET UG`}
                                        >
                                            <Dropdown.Item href="#/course" value="UG1" onClick={(e)=>setCourse(e.target.value)}>UG1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">UG2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">UG3</Dropdown.Item>
                                        </SplitButton>
                                        <SplitButton
                                            key="end"
                                            id={`dropdown-button-drop-end`}
                                            drop="end"
                                            variant="secondary"
                                            title={`NEET PG`}
                                        >
                                            <Dropdown.Item eventKey="1">PG1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">PG2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">PG3</Dropdown.Item>
                                        </SplitButton>
                                    </SplitButton>
                                </Link> */}

                                {/* <Link to="/colleges" className={classes.link}>
                                    Colleges
                                </Link> */}
                                {!user ? <>
                                    <Link to="/login" className={classes.link}>
                                        Login
                                    </Link>
                                    <Link to="/register" className={classes.link}>
                                        Register
                                    </Link>
                                </> :
                                    <>
                                        <Link to="/account" className={classes.link}>
                                            Hi, {user.name}
                                        </Link>
                                        <Link to="/" className={classes.link} onClick={() => {
                                            try {
                                                axios.get(LOGOUT_URL, {
                                                    headers: {
                                                        Authorization: `Bearer ${cookieToken}`
                                                    }
                                                })
                                                    .then((res) => {
                                                        setUser(null);
                                                        setCookieToken(null);
                                                        Cookies.remove('token');
                                                        localStorage.removeItem('user');
                                                    })
                                                    .catch((error) => {
                                                        console.log(error);
                                                    });

                                            }
                                            catch (error) {
                                                console.log(error)
                                            }
                                        }}>
                                            Logout
                                        </Link>
                                    </>
                                }

                            </div>
                        </Toolbar>
                    </AppBar>
                </>)
            }
        </div >
    )
}

export default Navbar;