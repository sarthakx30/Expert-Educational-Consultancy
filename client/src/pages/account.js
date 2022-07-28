import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

import { Paper, Typography, Button, Grow,Stack,Alert } from '@mui/material';

const Account = ({ navbar, setNavbar }) => {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        setNavbar(true);
        // console.log(user);
    }, [])
    return (
        <Paper elevation={3} style={{ margin: "80px 20px", padding: "20px" }}>
            {user ? <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><Typography>Name</Typography><Typography>{user.name}</Typography><Button>Change Name</Button></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><Typography>E-Mail</Typography><Typography>{user.email}</Typography><Button>Change Email</Button></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><Typography>City</Typography><Typography>{user.city}</Typography><Button>Change City</Button></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><Typography>Course</Typography><Typography>{user.course}</Typography><Button>Change Course</Button></div>
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
        </Paper>
    )
}

export default Account;