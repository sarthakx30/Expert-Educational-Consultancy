import React, { useEffect, useState,useContext } from 'react';

import { Grow, Box, Grid, makeStyles, CssBaseline, Container, Paper, Typography } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import {UserContext} from "../UserContext"

import axios from '../api/axios';

const LOGIN_URL = '/api/v1/login';

const useStyles = makeStyles(() => ({
    form: {
        maxWidth: "400px",
        minHeight: "300px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        background: "white",
        padding: "20px",
    }
}));

const Login = ({ navbar, setNavbar }) => {
    const classes = useStyles();

    useEffect(() => {
        setNavbar(true);
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [failiure, setFailiure] = useState(false);
    const [failiureMessage, setFailiureMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [responseRecieved, setResponseRecieved] = useState(false);

    const {user,setUser}=useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseRecieved(true);
        setSuccess(false);
        setFailiure(false);
        if (!email || !password) {
            setResponseRecieved(false);
            return alert("One or more fields missing");
        }
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )
            console.log(response);
            // const accessToken = response.accessToken
            setResponseRecieved(false);
            setSuccess(true);
            setUser(response.data.user);
            // console.log(user);
        } catch (error) {
            console.log(error);
            // console.log(error.response.data.msg);
            setFailiureMessage(error.response.data.msg);
            // alert(error.response.data.msg);
            setFailiure(true);
            setResponseRecieved(false);
        }
        console.log(email, password);

    }

    return (
        <Box
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            style={{ margin: '100px 50px' }}
        >
            {failiure ? (
                <Grow in timeout={500}>
                    <Stack sx={{ width: '100%' }}>
                        <Alert
                            severity="error"
                            action={
                                <Button href="/" color="inherit" size="small">
                                    Home
                                </Button>
                            }
                        >
                            {failiureMessage}
                        </Alert>
                    </Stack>
                </Grow>
            ) : (<></>)
            }
            {success ? (
                <Grow in timeout={500}>
                    <Stack sx={{ width: '100%' }}>
                        <Alert
                            action={
                                <Button href="/" color="inherit" size="small">
                                    Home
                                </Button>
                            }
                        >
                            Login Successful. Click on the button to go back to home page
                        </Alert>
                    </Stack>
                </Grow>
            ) : (<></>)
            }
            <Paper elevation={3} style={{ padding: '5px' }}>
                <Typography style={{ margin: '20px' }} variant="h3" align="center">
                    Login
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: '5px' }} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '5px', marginBottom: '20px' }} id="outlined-basic" label="Password" variant="outlined" />
                    {responseRecieved ?
                        <Button color="primary" style={{ margin: '5px' }} variant="contained"><CircularProgress style={{ color: "white" }} /></Button>
                        :
                        <Button type="submit" color="primary" style={{ margin: '5px' }} variant="contained">Sign IN</Button>
                    }

                </form>
            </Paper>
        </Box>
    )
}

export default Login;