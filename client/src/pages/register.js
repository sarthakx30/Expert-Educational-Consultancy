import React, { useEffect, useState } from 'react';
import { Grow, Box, Grid, makeStyles, CssBaseline, Container, Paper, Typography } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

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
    const [city, setCity] = useState("");

    const [failiure, setFailiure] = useState(false);
    const [failiureMessage, setFailiureMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [responseRecieved, setResponseRecieved] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseRecieved(true);
        setSuccess(false);
        setFailiure(false);
        if (!name || !email || !password || !course) {
            setResponseRecieved(false);
            return alert("One or more fields missing");
        }
        try {
            const response = await axios.post(REGISTERATION_URL,
                JSON.stringify({ name, email, password, course, city }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )
            console.log(JSON.stringify(response));
            // const accessToken = response.accessToken
            setResponseRecieved(false);
            setSuccess(true);
        } catch (error) {
            // console.log(error);
            // console.log(error.response.data.msg);
            setFailiureMessage(error.response.data.msg);
            // alert(error.response.data.msg);
            setFailiure(true);
            setResponseRecieved(false);
        }
        console.log(name, email, password, course);

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
                    <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '5px', marginBottom: '20px' }} id="outlined-basic" label="Password" variant="outlined" />
                    <TextField value={city} onChange={(e) => setCity(e.target.value)} style={{ margin: '5px', marginBottom: '20px' }} id="outlined-basic" label="City" variant="outlined" />
                    <TextField
                        select
                        label="Course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <MenuItem value="MBBS">MBBS</MenuItem>
                        <MenuItem value="BAMS">BAMS</MenuItem>
                        <MenuItem value="BHMS">BHMS</MenuItem>
                        <MenuItem value="BDS">BDS</MenuItem>
                        <MenuItem value="MD/MS">MD/MDS</MenuItem>
                        <MenuItem value="DNB">DNB</MenuItem>
                        <MenuItem value="FCPS/CPS">FCPS/CPS</MenuItem>
                    </TextField>
                    {responseRecieved ?
                        <Button color="primary" style={{ margin: '5px' }} variant="contained"><CircularProgress style={{ color: "white" }} /></Button>
                        :
                        <Button type="submit" color="primary" style={{ margin: '5px' }} variant="contained">Sign UP</Button>
                    }

                </form>
            </Paper>
        </Box>
    )
}

export default Register;