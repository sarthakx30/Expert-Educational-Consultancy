import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logoMini from "../images/logo-mini.jpeg";
import texturedImage from "../images/textured_3_edit.png"

import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
    AppBar,
    CssBaseline,
    Typography,
    Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "orange",
        fontSize: "20px",
        "&:focus,&:hover":{
            color:"orange"
        }
    },
    icon: {
        color: "white"
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    logoText: {
        color: "#fea905",
        fontSize: "20px",
        position: "relative",
        zIndex: 100,
        marginLeft: "20px",
        fontFamily: 'Revue',
        textDecoration: "none",
    },
    navbar: {
        background: `url(${texturedImage})`,
        position: "fixed",
    },
    paper: {
        background: `url(${texturedImage})`,
    },
    list:{
        // background: "#0411af",
    }
}));

const DrawerMenu = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div>
            <CssBaseline />
            <AppBar elevation={0} className={classes.navbar}>
                <Toolbar >
                    <Link to="/" className={classes.logoText}>
                        <Typography style={{ marginLeft: 0, fontSize: "20px", fontWeight: "700" }} className={classes.logoText}>Expert Educational</Typography>
                        <Typography style={{ marginLeft: 0, fontSize: "32px", fontWeight: "300" }} className={classes.logoText}>Consultancy</Typography>
                    </Link>
                    <Drawer
                        anchor="right"
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                        classes={{paper:classes.paper}}
                    >
                        <List className={classes.list}>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <Link className={classes.link} to="/about">About</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <Link className={classes.link} to="/register">Register</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <Link className={classes.link} to="/login">Login</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <Link className={classes.link} to="/colleges">Colleges</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Grid item>
                        <IconButton style={{ position: "absolute", right: 5, top: 10,color:"orange" }} onClick={() => setOpenDrawer(!openDrawer)}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default DrawerMenu;