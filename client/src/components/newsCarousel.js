import React from 'react';
import { useMediaQuery,useTheme,Paper, Container, Typography, makeStyles } from "@material-ui/core";
import texturedImage from "../images/textured_3.png";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
// import "./newsCarousel.css";
import image1 from "../images/testimonials/priyanshi_mathur.jpeg";
import image2 from "../images/testimonials/mudit_jain.jpeg";

const useStyles = makeStyles(() => ({
    image: {
        width: "80px",
        height: "80px",
        borderRadius: "30%",
        objectFit: "cover",
        // transform:"rotate(270deg)"
    },
    item: {
        textAlign: "center",
        padding: "25px 0px 0px 50px",
        // transform: "rotate(270deg)",
        // width: "100%",
        // height: "400px",
        // // border: "5px solid red",
        position: "relative",
        // padding:"25px 0px 0px 50px",
        bottom: "10px",
        // left: "30px",
        // // zIndex:"50"
        // // padding:"200px"

    },
    caption: {
        // position: "relative",
        margin:"0 auto",
        left: "150px",
        bottom: "0px",
        // padding: "30px 30px 0px 30px",
        // marginBottom:"20px"
        // transform: "rotate(270deg)",
        // border:"2px solid red",
        // zIndex: ""999
        // height:"400px",
        width:"60%",

    },
    paper: {
        marginTop: "20px",
        height: "100px",
        background: `url(${texturedImage})`,
        boxShadow: "2px 2px 5px 1px blue ,1px 1px 1px 0px blue,1px 1px 2px 0px #eceef4 ",
    },
    text: {
        fontFamily: "Nunito Sans",
        fontWeight: "600",
        fontSize: "15px",
    }
}));

const NewsCarousel = () => {
    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div style={{ marginBottom: "30px" }}>
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
                    label="News"
                    className={classes.chip}
                />
            </Divider>
            <Paper elevation={5} className={classes.paper}>
                <Carousel style={{ height: "120px", width: "100%", position: "relative", right: "0px", bottom: "5px" }} indicators={true}>
                    <Carousel.Item className={classes.item}>
                        <a href="https://www.timesnownews.com/education/neet-2022-exam-date-reporting-time-what-to-carry-and-other-important-instructions-article-92900514" >
                            <div style={isMobile?{ display: "flex" }:{display: "flex",paddingLeft:"100px"}}>
                                <img
                                    className={classes.image}
                                    src="https://static.tnn.in/photo/msid-92900557,imgsize-19622,updatedat-1657883883903,width-200,height-200,resizemode-75/92900557.jpg"
                                    alt="First slide"
                                />

                                <Carousel.Caption className={classes.caption}>
                                    <Typography className={classes.text} variant="body2" gutterBottom style={{ color: "orange", }}>
                                        NEET 2022 Exam Date, reporting time, what to carry and other important instructions
                                    </Typography>
                                </Carousel.Caption>
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item className={classes.item}>
                        <a href="https://zeenews.india.com/india/neet-ug-2022-nta-issues-advisory-for-students-at-neet-nta-nic-in-check-dress-code-and-more-here-2485885.html" >
                            <div style={isMobile?{ display: "flex" }:{display: "flex",paddingLeft:"100px"}}>
                                <img
                                    className={classes.image}
                                    src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/07/16/1065621-neet-ug-2022-admit-card-dress-code-guidelines.jpg"
                                    alt="Second slide"
                                />

                                <Carousel.Caption className={classes.caption}>
                                    <Typography className={classes.text} variant="body2" gutterBottom style={{ color: "orange", }}>
                                        NEET UG 2022: NTA issues advisory for students at neet.nta.nic.in, check dress code and more here
                                    </Typography>
                                </Carousel.Caption>
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item className={classes.item}>
                        <a href="https://www.hindustantimes.com/education/exam-results/neet-pg-result-2022-for-aiq-seats-declared-here-s-direct-link-to-check-101657723204710.html" >
                            <div style={isMobile?{ display: "flex" }:{display: "flex",paddingLeft:"100px"}}>
                                <img
                                    className={classes.image}
                                    src="https://images.hindustantimes.com/img/2022/07/13/400x225/results_222603a6-641a-11e8-b4a9-2154dcd09999_1657723333158_1657723333158.jpg"
                                    alt="Second slide"
                                />

                                <Carousel.Caption className={classes.caption}>
                                    <Typography className={classes.text} variant="body2" gutterBottom style={{ color: "orange", }}>
                                        NEET PG Result 2022 for AIQ seats declared, here’s direct link to check
                                    </Typography>
                                </Carousel.Caption>
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item className={classes.item}>
                        <a href="https://www.dnaindia.com/education/report-neet-ss-2022-registration-begins-at-natboard-edu-in-know-how-to-apply-2969086" >
                            <div style={isMobile?{ display: "flex" }:{display: "flex",paddingLeft:"100px"}}>
                                <img
                                    className={classes.image}
                                    src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/16/2522893-exam.jpg"
                                    alt="Second slide"
                                />

                                <Carousel.Caption className={classes.caption}>
                                    <Typography className={classes.text} variant="body2" gutterBottom style={{ color: "orange", }}>
                                        NEET SS 2022 registration begins at natboard.edu.in, know how to apply
                                    </Typography>
                                </Carousel.Caption>
                            </div>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </Paper>
        </div>
    )
}

export default NewsCarousel;