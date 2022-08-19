import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from '../api/axios';

import { Paper, Typography, Button, Grow, Stack, Alert, TextField, CircularProgress, MenuItem } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Cookies from 'js-cookie';

const useStyles = makeStyles(() => ({
    fieldSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "40px",
    },
    text: {
        fontFamily: "Nunito Sans !important",
        fontWeight: "600 !important"
    }
}));

const Account = ({ navbar, setNavbar }) => {
    const { user, setUser, cookieToken, setCookieToken } = useContext(UserContext);

    const [changingDetails, setChangingDetails] = useState(false);

    const [failiure, setFailiure] = useState(null);
    const [success, setSuccess] = useState(null);
    const [responseRecieved, setResponseRecieved] = useState(true);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [course, setCourse] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        setNavbar(true);
    }, [])

    const handleSubmit = async (e) => {
        if (!changingDetails) {
            setName(user.name);
            setEmail(user.email);
            setCity(user.city);
            setCourse(user.course);
            setChangingDetails(true);
        }
        else {
            setResponseRecieved(false);
            if (name.length > 0 && email.length > 0 && city.length > 0 && course.length > 0) {
                setChangingDetails(false);
                await axios.put('/api/v1/youraccount',
                    JSON.stringify({ name, email, city, course }), {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookieToken}`
                    }
                })
                    .then(res => {
                        // console.log(res);
                        setSuccess(res);
                        // setResponseUser(res.data.user);
                        setUser(res.data.user);
                        setResponseRecieved(true);
                    })
                    .catch(err => {
                        setFailiure(err);
                        setResponseRecieved(true);
                    })
            }
        }
    }

    return (
        <Paper elevation={3} style={{ margin: "80px 20px", padding: "20px" }}>
            {
                user && Cookies.get('token') ? <>
                    {responseRecieved ? <>
                        <Typography className={classes.text} style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                            Your Account Details
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                style={{
                                    fontFamily: "Nunito Sans",
                                    fontWeight: "600",
                                    background: "white",
                                    color: "black",
                                    borderRadius: "10px",
                                    transition: "all 0.5s ease",
                                    border: "2px solid orange",
                                    "&:hover,&:focus": {
                                        boxShadow: "0px 0px 6px 2.5px #fea905 ,1px 1px 1px 0px #ECDE65,1px 1px 1px 0px #ECDE65",
                                        color: "#fea905",
                                        background: "linear-gradient(to right bottom,black,#0411af)"
                                    }
                                }}
                            >
                                {changingDetails ? "Save details" : "Change details"}
                            </Button>
                        </Typography>
                        <div style={{ marginTop: "20px" }}>
                            {
                                success ? <Grow in timeout={500}>
                                    <Stack sx={{ width: '100%' }}>
                                        <Alert>
                                            {`Your details have been updated`}
                                        </Alert>
                                    </Stack>
                                </Grow> : failiure ?
                                    <Grow in timeout={500}>
                                        <Stack sx={{ width: '100%' }}>
                                            <Alert severity="error">
                                                {`${failiure}`}
                                            </Alert>
                                        </Stack>
                                    </Grow> : <></>
                            }
                        </div>
                        <div style={{ marginTop: "50px" }}>
                            <div className={classes.fieldSection}>
                                <Typography className={classes.text}>Name</Typography>
                                {changingDetails ?
                                    <TextField
                                        className={classes.text}
                                        label='Change Name'
                                        color="warning"
                                        value={name}
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                    />
                                    :
                                    <Typography className={classes.text} style={{ color: 'orange' }}>{user.name}</Typography>
                                }
                            </div>
                            <div className={classes.fieldSection}>
                                <Typography className={classes.text}>E-Mail</Typography>
                                {changingDetails ?
                                    <TextField
                                        className={classes.text}
                                        label='Change Email'
                                        color="warning"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                    :
                                    <Typography className={classes.text} style={{ color: 'orange' }}>{user.email}</Typography>
                                }
                            </div>
                            <div className={classes.fieldSection}>
                                <Typography className={classes.text}>City</Typography>
                                {changingDetails ?
                                    <TextField
                                        className={classes.text}
                                        label='Change City'
                                        color="warning"
                                        value={city}
                                        onChange={(event) => {
                                            setCity(event.target.value);
                                        }}
                                    />
                                    :
                                    <Typography className={classes.text} style={{ color: 'orange' }}>{user.city}</Typography>
                                }
                            </div>
                            <div className={classes.fieldSection}>
                                <Typography className={classes.text}>Course</Typography>
                                {changingDetails ?
                                    <TextField
                                        select
                                        color='warning'
                                        label="Change Course"
                                        value={course}
                                        onChange={(e) => setCourse(e.target.value)}
                                        style={{ width: '222px' }}
                                    >
                                        <MenuItem value="MBBS">MBBS</MenuItem>
                                        <MenuItem value="BAMS">BAMS</MenuItem>
                                        <MenuItem value="BHMS">BHMS</MenuItem>
                                        <MenuItem value="BDS">BDS</MenuItem>
                                        <MenuItem value="MD/MS">MD/MDS</MenuItem>
                                        <MenuItem value="DNB">DNB</MenuItem>
                                        <MenuItem value="FCPS/CPS">FCPS/CPS</MenuItem>
                                    </TextField>
                                    :
                                    <Typography className={classes.text} style={{ color: 'orange' }}>{user.course}</Typography>
                                }
                            </div>
                        </div>
                    </> : <Typography align="center">Your Details are being updated ....<CircularProgress /></Typography>}
                </> :
                    <Grow in timeout={500}>
                        <Stack sx={{ width: '100%' }}>
                            <Alert
                                severity="error"
                                action={
                                    <Button href="/login" color="inherit" size="small">
                                        Login
                                    </Button>
                                }
                            >
                                You need to Login First
                            </Alert>
                        </Stack>
                    </Grow>
            }
        </Paper >
    )
}

export default Account;