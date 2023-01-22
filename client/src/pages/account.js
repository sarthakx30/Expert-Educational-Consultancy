import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from '../api/axios';

import { Paper, Typography, Button, Grow, Stack, Alert, TextField, CircularProgress, MenuItem, Grid, Item } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Cookies from 'js-cookie';
import Colleges from './colleges';

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
    const [image, setImage] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        setNavbar(true);
    }, [])

    const handleSubmit = async (e) => {
        console.log(user.image);

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
        <Grid container style={{ padding: '80px 15px 15px 15px' }}>
            {
            user && Cookies.get('token') ?
                    <>
                        <Grid item md={4} xs={12} style={{ padding: '15px', background: 'rgba(102,173,255,0.4)', borderRadius: '15px' }}>
                            {
                                responseRecieved ?
                                    <>
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
                                                <img src={user.image} alt="profile" style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} />
                                            </div>
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
                                    </> :
                                    <Typography align="center">Your Details are being updated ....<CircularProgress /></Typography>
                            }
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Colleges navbar={navbar} setNavbar={setNavbar} />
                            <div>
                                <Typography align="center" className={classes.text} variant="h5" style={{ color: 'orange', marginBottom: '20px' }}>
                                    Get Exclusive Benifits with our Subscription
                                </Typography>
                                <div style={{ display: 'flex', flexDirection:'column',justifyContent:'space-between' }}>
                                    <div style={{display:'flex'}}>
                                        <Paper elevation={3} style={{ padding: '15px', background: 'rgba(102,173,255,0.4)', borderRadius: '15px',margin:'15px' }}>
                                            <Typography className={classes.text} align="center" style={{ fontSize: '20px',marginBottom:"15px" }}>
                                                Free
                                            </Typography>
                                            <ul>
                                                <li>About NEET UG</li>
                                                <li>About MCC UG All India Counselling</li>
                                                <li>About State UG Counselling</li>
                                                <li>State-wise list of Medical Colleges in India</li>
                                                <li>Youtube/Social Media Channel Subscriptions</li>
                                                <li>Case Studies/Blog Posts</li>
                                            </ul>
                                        </Paper>
                                        <Paper elevation={3} style={{ padding: '15px', background: 'rgba(102,173,255,0.4)', borderRadius: '15px',display:'flex',flexDirection:'column',margin:'10px' }}>
                                            <Typography className={classes.text} align="center" style={{ color: '#cd7f32', textShadow: '1px 1px 10px brown', fontSize: '20px',marginBottom:"15px" }}>
                                                Bronze
                                            </Typography>
                                            <ul>
                                                <li>Free Plan Benifits</li>
                                                <li>Expert ranking of all medical colleges</li>
                                                <li>Fee structure of all medical colleges</li>
                                                <li>Special provisions applicability</li>
                                                <li>Last year category wise cutoff of colleges</li>
                                                <li>Notification alerts for UG counselling</li>
                                            </ul>
                                            <Button
                                                variant="contained"
                                                style={{
                                                    margin:'0 auto',
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
                                                ₹ 499
                                            </Button>
                                        </Paper>
                                        <Paper elevation={3} style={{ padding: '15px', background: 'rgba(102,173,255,0.4)', borderRadius: '15px',display:'flex',flexDirection:'column',margin:'10px' }}>
                                            <Typography className={classes.text} align="center" style={{ color: 'white', textShadow: '2px 2px 10px black', fontSize: '20px',marginBottom:"15px" }}>
                                                Silver
                                            </Typography>
                                            <ul>
                                                <li>Bronze Plan Benifits</li>
                                                <li>Personalized admission probability report</li>
                                                <li>Personalized college predictor as per rank</li>
                                                <li>Category wise, round-wise cutoff of medical colleges</li>
                                                <li>Information about NBBS abroad</li>
                                                <li>Documents lists with scan and save facility</li>
                                            </ul>
                                            <br/>
                                            <Button
                                                variant="contained"
                                                style={{
                                                    margin:'0 auto',
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
                                                ₹ 999
                                            </Button>
                                        </Paper>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <Paper elevation={3} style={{ padding: '15px', background: 'rgba(102,173,255,0.4)', borderRadius: '15px',display:'flex',flexDirection:'column',margin:'10px' }}>
                                            <Typography className={classes.text} align="center" style={{ color: '#ffd700', textShadow: '1px 1px 10px black', fontSize: '20px',marginBottom:"15px" }}>
                                                Gold
                                            </Typography>
                                            <ul>
                                                <li>Silver Plan Benifits</li>
                                                <li>Personalized Guidance on Govt/Private/Deemed R1 & R2 counselling</li>
                                                <li>Form Filling</li>
                                                <li>NEET AIR Rank based choice order list of colleges</li>
                                                <li>Merit list and result updates of counselling</li>
                                                <li>Online counselling support by Expert Admission COunsellor - 5</li>
                                                <li>Online Counselling Sessions with Mr. Shamsher Rana - 2</li>
                                            </ul>
                                            <Button
                                                variant="contained"
                                                style={{
                                                    margin:'0 auto',
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
                                                ₹ 2999
                                            </Button>
                                        </Paper>
                                        <Paper elevation={3} style={{ padding: '15px', background: 'rgba(102,173,255,0.4)', borderRadius: '15px',display:'flex',flexDirection:'column',margin:'10px' }}>
                                            <Typography className={classes.text} align="center" style={{ color: 'orange', textShadow: '2px 2px 15px orange', fontSize: '20px',marginBottom:"15px" }}>
                                                Platinum
                                            </Typography>
                                            <ul>
                                                <li>Gold Plan Benifits</li>
                                                <li>NRI Quota Admission Counselling</li>
                                                <li>Management seat admission counsellng</li>
                                                <li>Mop up round counselling</li>
                                                <li>Stray vacancy round counselling</li>
                                                <li>MBBS Abroad Admission Counselling</li>
                                                <li>Online counselling support by Expert Admission COunsellor - Unlimited</li>
                                                <li>Online Counselling Sessions with Mr. Shamsher Rana - 5</li>
                                            </ul>
                                            <br/>
                                            <Button
                                                variant="contained"
                                                style={{
                                                    margin:'0 auto',
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
                                                ₹ 5999
                                            </Button>
                                        </Paper>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </>
                    :
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
        </Grid>
    )
}

export default Account;