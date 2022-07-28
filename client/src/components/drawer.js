import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
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

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "orange",
        fontSize: "20px",
        "&:focus,&:hover": {
            color: "orange"
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
    list: {
        // background: "#0411af",
    }
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DrawerMenu = () => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    const { user, setUser } = useContext(UserContext);

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
                        classes={{ paper: classes.paper }}
                    >
                        <List className={classes.list}>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <Link className={classes.link} to="/about">About</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemText>
                                    <Link className={classes.link} to="/colleges">Colleges</Link>
                                </ListItemText>
                            </ListItem>
                            {!user ?
                                <>
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
                                </> :
                                <>
                                    <ListItem onClick={() => setOpenDrawer(false)}>
                                        <ListItemText>
                                            <Link className={classes.link} to="/account">Hi, {user.name}</Link>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem onClick={() => {
                                        setOpenDrawer(false);
                                        // console.log("logged out")
                                        try{
                                            setUser(null);
                                        }
                                        catch(error){
                                            console.log(error)
                                        }
                                        // return (
                                        //     <Stack spacing={2} sx={{ width: '100%' }}>
                                        //         <Button variant="outlined" onClick={handleClick}>
                                        //             Open success snackbar
                                        //         </Button>
                                        //         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        //             <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        //                 This is a success message!
                                        //             </Alert>
                                        //         </Snackbar>
                                        //         <Alert severity="error">This is an error message!</Alert>
                                        //         <Alert severity="warning">This is a warning message!</Alert>
                                        //         <Alert severity="info">This is an information message!</Alert>
                                        //         <Alert severity="success">This is a success message!</Alert>
                                        //     </Stack>
                                        // )
                                    }}>
                                        <ListItemText>
                                            <Link className={classes.link} to="/">Logout</Link>
                                        </ListItemText>
                                    </ListItem>
                                </>
                            }
                        </List>
                    </Drawer>
                    <Grid item>
                        <IconButton style={{ position: "absolute", right: 5, top: 10, color: "orange" }} onClick={() => setOpenDrawer(!openDrawer)}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default DrawerMenu;