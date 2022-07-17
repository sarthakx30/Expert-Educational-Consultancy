import React from 'react';
import { Paper, Container, Typography, makeStyles, Button } from "@material-ui/core";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Box from '@mui/material/Box';

import image1 from "../images/testimonials/priyanshi_mathur.jpeg";
import image2 from "../images/testimonials/mudit_jain.jpeg";
import image3 from '../images/carousel-images/carousel-image-3.jpg';
import texturedImage from "../images/textured_3.png";



const useStyles = makeStyles((theme) => ({
    testimonialsBtn: {
        margin: "20px",
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px",
        transition: "all 0.5s ease",
        border: "2px solid orange",
        "&:hover,&:focus": {
            boxShadow: "0px 0px 6px 2.5px #fea905 ,1px 1px 1px 0px #ECDE65,1px 1px 1px 0px #ECDE65",
            color: "orange",
            background: "linear-gradient(to right bottom,black,#0411af)"
        }
    },
    image: {

        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        opacity: 1,
        display: "inline-block"
    },
    item: {
        textAlign: "center",
        opacity: 1,
        padding: "20px",
    },
    caption: {
        position: "relative",
        left: "0px",
        top: "10px",
        padding: "0px 70px 15px 70px"

    },
    paper: {
        marginTop: "20px",
        background: `url(${texturedImage})`,
        boxShadow: "2px 2px 5px 1px blue ,1px 1px 1px 0px blue,1px 1px 2px 0px #eceef4 ",
    },
    text: {
        fontFamily: "Nunito Sans",
        fontWeight: "600"
    }
}));

const Testimonials = () => {
    const classes = useStyles();
    return (
        <div>
            <Divider
                sx={{
                    marginTop: "20px",
                    marginBottom: "40px",
                    "&::before, &::after": {
                        borderTop: "2px solid #fea905",
                    },
                }}
                className={classes.divider}>
                <Chip
                    sx={{
                        background: "linear-gradient(to right bottom,orange,#fea905)"
                    }}
                    label="Our Testimonials"
                    className={classes.chip}
                />
            </Divider>
            <Paper elevation={5} className={classes.paper}>
                <Carousel indicators={false}>
                    <Carousel.Item className={classes.item}>
                        <img
                            className={classes.image}
                            src={image1}
                            alt="First slide"
                        />

                        <Carousel.Caption className={classes.caption}>
                            <Typography className={classes.text} variant="h4" gutterBottom style={{ color: "orange", }}>
                                Priyanshi Mathur
                            </Typography>
                            <Typography className={classes.text} variant="body2" gutterBottom style={{ color: "orange", }}>
                                Expert Educational Consultancy.... The best place to get counselling and guidance. Mr. Rana sir provides the best guidance for admission procedure. My daughter got a seat from NEET UG counselling. Staff is very professional and helpful...
                                I highly recommended expert education consultancy to all the NEET aspirants 🙏
                                <br/>
                                <br/>
                            </Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={classes.item}>
                        <img
                            className={classes.image}
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className={classes.caption}>
                            <Typography className={classes.text} variant="h4" gutterBottom style={{ color: "orange", }}>
                                Mudit Jain
                            </Typography>
                            <Typography className={classes.text} variant="body2" gutterBottom style={{ color: "orange", }}>
                                Expert Educational Consultancy has been best and trusted support to a NEET Aspirant
                                They have provided all important updates timely regarding -
                                Fee structure
                                Bond status
                                College Review
                                Best thing is that they give personalised and customised guidance according to ur NEET score and give trustworthy advice.
                                It's been worth remembering journey with Expert team
                                Thank you for your guidance and support !!!!--
                            </Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Paper>
            <Typography align="center">
                <br />
                <Button className={classes.testimonialsBtn} href="/reviews" variant="contained">Some Frequently Asked Questions</Button>
            </Typography>
        </div>
    )
}

export default Testimonials;