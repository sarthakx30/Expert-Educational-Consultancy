import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logoMini from "../images/logo-mini.jpeg";

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
        color: "red",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    logoText: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px"
    }
}));

const DrawerMenu = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar >
                    <Link to="/" className={classes.logoText}>
                        <img height="55px" src={logoMini}/>
                    </Link>
                    <Drawer
                        anchor="right"
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                    >
                        <List>
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
                        </List>
                    </Drawer>
                    <Grid item>
                        <IconButton style={{position:"absolute",right:0,top:0}} onClick={() => setOpenDrawer(!openDrawer)}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default DrawerMenu;