import React from 'react';
import { TextField, Button, Grid, Box, Typography, makeStyles, Paper, Container } from '@material-ui/core';
import { Instagram, Facebook, Mail, Phone } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    text: {
        color: "white"
    },
    paper: {
        color: "white",
        backgroundColor: '#343538',
        padding: "20px",
        marginTop: "20px",
        boxShadow: "2px 2px 1px 1px #ECDE65 ,1px 1px 1px 0px #ECDE65,1px 1px 5px 0px #ECDE65",
        ['@media (max-width:400px)']: {
            padding: '10px'
        }
    },
    icons: {
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "20px"
    },
    textField: {
        backgroundColor: "#8C8C8C",
        borderRadius: "30px",
        color: "white",
        width: "20em"
    },
    textFieldArea: {
        padding:"20px",
        ['@media (max-width:460px)']: {
            padding:"0px",
            marginTop: "10px",
            height: "50px"
            // marginBottom:"0px"
        }

    },
    submitBtn: {
        backgroundColor: "yellow",
        borderRadius: "20px",
        width: "7em",
        height: "3.7em",
        position: "relative",
        right: "50px",
        ['@media (max-width:507px)']: {
            right: "0px",
            bottom:"55px",
            left: "200px",
        }
    },
    icon: {
        // margin: "20px",
    },

}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Box
            style={{
                backgroundColor: '#27282B',
                padding: '20px'
            }}
        >
            <Grid container justify="space-around">
                <Grid item xs={12} md={5}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography className={classes.text} variant="h5">Reach Us</Typography>
                        <Typography className={classes.text} variant="body2">Contact our Support team</Typography>
                        <Grid container spacing={2} justify="space-between">
                            <Grid item md={12} xs={4} >
                                <Button size="small" backgroundColor="white" color="white" style={{ backgroundColor: "#444548", color: "white" }}>
                                    <Mail />expertec303@yahoo.co.in
                                </Button>
                            </Grid>
                            <Grid item md={12} xs={4}>
                                <Button size="small" backgroundColor="white" color="white" style={{ backgroundColor: "#444548", color: "white" }}>
                                    <Phone />9313555011
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography className={classes.text} variant="h5">Subscribe to our Newsletter</Typography>
                        <Typography className={classes.text} variant="body2">Get Daily Updates</Typography>
                        <Container className={classes.textFieldArea}>
                            <TextField className={classes.textField} id="filled-standard" label="Enter your email" variant="filled" />
                            <Button size="large" className={classes.submitBtn}>Submit</Button>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
            <Paper elevation={6} className={classes.paper}>
                <Typography>
                    Contact us via our Socials
                </Typography>
                <Box
                    className={classes.icons}
                >
                    <Instagram className={classes.icon} />
                    <Facebook className={classes.icon} />
                    <Mail className={classes.icon} />
                    <Phone className={classes.icon} />
                </Box>
            </Paper>
        </Box>
    )
}

export default Footer;