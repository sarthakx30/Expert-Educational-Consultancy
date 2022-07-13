import React from 'react';
import { Box, Grid, makeStyles, CssBaseline, Container, TextField, Paper, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    form: {
        maxWidth: "400px",
        minHeight: "250px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        background: "white",
        padding: "20px",
    }
}));

const Login = () => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            style={{ margin: '50px' }}
        >
            <Paper elevation={3} style={{ padding: '5px' }}>
                <Typography style={{ margin: '20px' }} variant="h3" align="center">
                    Login
                </Typography>
                <form className={classes.form}>
                    <TextField style={{ margin: '5px' }} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField style={{ margin: '5px' , marginBottom: '20px' }} id="outlined-basic" label="Password" variant="outlined" />
                    <Button type="submit" color="primary" style={{ margin: '5px' }} variant="contained">Sign in</Button>
                </form>
            </Paper>
        </Box>
    )
}

export default Login;