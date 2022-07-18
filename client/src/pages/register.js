import React, { useEffect, useState } from 'react';
import { Grow, Box, Grid, makeStyles, CssBaseline, Container, Paper, Typography } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import axios from '../api/axios';

const REGISTERATION_URL = '/api/v1/register';

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

const Register = ({ navbar, setNavbar }) => {
    const classes = useStyles();
    useEffect(() => {
        setNavbar(true);
    }, [])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name||!email||!password||!course){
            return alert("One or more fields missing");
        }
        try {
            const response = await axios.post(REGISTERATION_URL,
                JSON.stringify({ name, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response));
            const accessToken = response.accessToken
        } catch (error) {
            <Grow in timeout={500}>
                <Stack sx={{ width: '100%' }}>
                    <Alert>
                        {error.message}
                    </Alert>
                </Stack>
            </Grow>
        }
        setSuccess(true);
        console.log(name, email, password, course);

        // <Stack sx={{ width: '100%' }} spacing={2}>
        //     <MuiAlert
        //         action={
        //             <Button color="inherit" size="small">
        //                 UNDO
        //             </Button>
        //         }
        //     >
        //         This is a success alert — check it out!
        //     </MuiAlert>
        // </Stack>
        // alert("works")

    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            style={{ margin: '100px 50px' }}
        >   {success ? (
            <Grow in timeout={500}>
                <Stack sx={{ width: '100%' }}>
                    <Alert
                        action={
                            <Button href="/" color="inherit" size="small">
                                Home
                            </Button>
                        }
                    >
                        Registeration Successful. Our team will soon reach out to you. Click on the button to go back to home page
                    </Alert>
                </Stack>
            </Grow>
        ) : (<></>)
            }
            <Paper elevation={3} style={{ padding: '5px' }}>
                <Typography style={{ margin: '20px' }} variant="h3" align="center">
                    Register
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <TextField value={name} onChange={(e) => setName(e.target.value)} style={{ margin: '5px' }} id="outlined-basic" label="Name" variant="outlined" />
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: '5px' }} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '5px', marginBottom: '20px' }} id="outlined-basic" label="Password" variant="outlined" />
                    <TextField
                        select
                        label="Course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        <MenuItem value={40}>Forty</MenuItem>
                        <MenuItem value={50}>Fifty</MenuItem>
                        <MenuItem value={60}>Sixty</MenuItem>
                    </TextField>
                    <Button type="submit" color="primary" style={{ margin: '5px' }} variant="contained">Sign UP</Button>
                </form>
            </Paper>
        </Box>
    )
}

export default Register;