import React, { useEffect, useRef, useState } from 'react';
import CarouselComponent from '../components/carousel';
import { useMediaQuery, useTheme, Container, Typography, makeStyles, Button, Paper } from "@material-ui/core";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Testimonials from "../components/testimonials";
import NewsCarousel from "../components/newsCarousel";
import Services from "../components/services";

const useStyles = makeStyles((theme) => ({
    btn: {
        fontFamily: "Nunito Sans",
        fontWeight: "600",
        margin: "20px",
        background: "white",
        color: "black",
        borderRadius: "10px",
        transition: "all 0.5s ease",
        border: "2px solid orange",
        // boxShadow: "2px 2px 1px 1px #fea905 ,1px 1px 1px 0px #ECDE65,1px 1px 5px 0px #ECDE65",
        // transition: "all 0.3s ease",
        "&:hover,&:focus": {
            boxShadow: "0px 0px 6px 2.5px #fea905 ,1px 1px 1px 0px #ECDE65,1px 1px 1px 0px #ECDE65",
            color: "#fea905",
            background: "linear-gradient(to right bottom,black,#0411af)"
        }
    },
    aboutUsSection: {
        marginTop: "15px",
        marginBottom: "15px",
        justifyContent: "space-between"
        ,
    }
}));

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const classes = useStyles();
    const [years, setYears] = useState(0);
    useEffect(() => {
        let num = 0;
        let totalMilSecDur = 2;
        let incrementTime = (totalMilSecDur / 26) * 1000;
        let timer = setInterval(() => {
            num += 1;   
            setYears(num);
            var date = new Date();
            if (num === date.getFullYear()-1996) {
                clearInterval(timer);
            }
        }, incrementTime);
    }, [])
    return (
        <div style={isMobile?{marginTop:"220px"}:{}} width="100%">
            <CarouselComponent />
            <Container style={{ position: "relative", bottom: "150px" }}>
                <div>
                    <Divider
                        sx={{
                            "&::before, &::after": {
                                borderTop: "2px solid #fea905",
                            },
                        }}
                        className={classes.divider}>
                        <Chip
                            sx={{
                                background: "linear-gradient(to right bottom,#fea905,orange)"
                            }}
                            label="A little about us"
                            className={classes.chip}
                        />
                    </Divider>
                    <Container className={classes.aboutUsSection} style={(!isMobile ? { display: "flex" } : { display: "inline-block" })}>
                        <Typography align="left" style={{
                            fontFamily: "Nunito Sans",
                            fontWeight: "600"
                        }} variant="body1">
                            Expert Educational Consultancy was conceptualised and incorporated in 1995 with a permanent office in Delhi, in response to the growing concerns in MBBS/MD / MS / DNB / Diploma / FCPS / CPS  admissions in India about fraud, misguidance and cheating by several unscrupulous touts masquerading as admission counsellors.
                            To combat this growing issue and offer complete transparency, Expert Educational Consultancy uses Artificial Intelligence and Data Analytics to help students.
                        </Typography>
                        <Paper elevation={3} style={!isMobile ? { width:"120%", height: "100%", margin: "0px 0px 0px 20px",padding:"20px" } : { height: "100px", margin: "30px 0px 30px 0px" }}>
                            <Typography align="center" style={isMobile ? {
                                fontFamily: "Nunito Sans",
                                fontWeight: "600",
                                fontSize: "20px",
                            } : {
                                fontFamily: "Nunito Sans",
                                fontWeight: "600",
                                fontSize: "20px",
                            }} variant="body1">
                                An Experience of
                                <br />
                                <p style={{ color: "#0411af", fontSize: "30px", position: "relative", top: "20px" }}>{years} Years</p>
                            </Typography>
                        </Paper>
                    </Container>
                </div>
                <Services/>
                <NewsCarousel/>
                <div>
                    <Divider
                        sx={{
                            "&::before, &::after": {
                                borderTop: "2px solid #fea905",
                            },
                        }}
                        className={classes.divider}>
                        <Chip
                            sx={{
                                background: "linear-gradient(to right bottom,#fea905,orange)"
                            }}
                            label="Become a Member"
                            className={classes.chip}
                        />
                    </Divider>
                    <Typography style={{
                        fontFamily: "Nunito Sans",
                        fontWeight: "600",
                        marginTop: "20px",
                    }} variant="body1" align="center">
                        Become a Member Now To Avail multiple benefits like the ability to download/save jpegs and notes, application details and status personalised guidance and much more. Click on the button below to learn more and become a member
                        <br />
                        <Button className={classes.btn} href="/register" variant="contained">Take Membership</Button>
                    </Typography>
                </div>
                <Testimonials />
            </Container>
        </div>
    )
}

export default Home;