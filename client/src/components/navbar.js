import React from 'react';
import { Toolbar, Container, AppBar, Typography, Grow, Grid, CssBaseline, makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerMenu from "./drawer";
import logo from '../images/logo_white.png';
import "../App.css";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        // marginLeft: theme.spacing(10),
        display: "flex",
        justifyContent: "space-around",
        width:"100%",
        // alignItems: "center",
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
        // textDecoration: "none",
        color: "#fea905",
        fontSize: "20px",
        position: "relative",
        zIndex:100,
        marginLeft: "20px",
        fontFamily: 'Merriweather'

    },
    navbar:{
        // width: "100%",
        background:0,
        // width: "96%",
        position: "relative",
        top:"230px",
        // top:150
        // margin:"0 auto",
        // marginTop: "5px"
        // boxShadow: "0px"
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <div>
            <CssBaseline />
            {isMobile ? (<DrawerMenu />) :
                (<>
                    <Typography style={{marginTop:"10px",fontSize:"25px",fontWeight:"700"}} className={classes.logoText}>Expert Educational</Typography>
                    <Typography style={{fontSize:"40px",fontWeight:"300"}} className={classes.logoText}>Consultancy</Typography>
                    {/* <img src={logo} width="100%" style={{padding:"10px",backgroundColor:"#faecce"}}/> */}
                    <AppBar elevation={0} className={classes.navbar} >
                        <Toolbar>
                            <div className={classes.navlinks}>
                                <Link to="/" className={classes.link}>
                                    Home
                                </Link>
                                <Link to="/about" className={classes.link}>
                                    About
                                </Link>
                                <Link to="/login" className={classes.link}>
                                    Login
                                </Link>
                                <Link to="/register" className={classes.link}>
                                    Register
                                </Link>
                            </div>
                        </Toolbar>
                    </AppBar>
                </>)
            }
        </div>
    )
}

export default Navbar;