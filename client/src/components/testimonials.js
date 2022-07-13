import React from 'react';
import { Paper,Container, Typography, makeStyles, Button } from "@material-ui/core";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Box from '@mui/material/Box';

import image1 from "../images/carousel-images/carousel-image-1.jpg";
import image2 from "../images/carousel-images/carousel-image-2.jpeg";
import image3 from '../images/carousel-images/carousel-image-3.jpg';
import { FlashOnTwoTone } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    testimonialsBtn: {
        margin: "20px",
        backgroundColor: "yellow",
        color: "hotpink",
        borderRadius: "10px",
        "&:hover,&:focus": {
            color: "yellow",
            backgroundColor: "hotpink"
        }
    },
    image: {
        // marginLeft:"50px",
        // margin:"0 auto",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        opacity: 1,
        display:"inline-block"
    },
    item: {
        textAlign: "center",
        // background: "#F4F85F"
        // display:"flex",
        // flexDirection: "column",
    },
    caption:{
        position: "relative",
        left: "0px",
        top: "10px",
    },
    paper:{
        marginTop: "20px",
        padding: "5px",
        backgroundColor: "#faecce",
        boxShadow: "2px 2px 5px 1px black ,1px 1px 1px 0px #black,1px 1px 2px 0px #eceef4 ",
    }
}));

const Testimonials = () => {
    const classes = useStyles();
    return (
        <div>
            <Divider
                sx={{
                    "&::before, &::after": {
                        borderTop: "2px solid hotpink",
                    },
                }}
                className={classes.divider}>
                <Chip
                    sx={{
                        background: "linear-gradient(to right bottom,pink,hotpink)"
                    }}
                    label="Our Testimonials"
                    className={classes.chip}
                />
            </Divider>
            <Paper elevation={5} className={classes.paper}>
                <Carousel indicators={false} variant="dark">
                    <Carousel.Item className={classes.item}>
                        <img
                            className={classes.image}
                            src={image1}
                            alt="First slide"
                        />
                        
                        <Carousel.Caption className={classes.caption}>
                            <Typography variant="h4" gutterBottom style={{color:"black", }}>
                                Sarthak Kharabanda
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{color:"black", }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur
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
                            <Typography variant="h4" gutterBottom style={{color:"black", }}>
                                Archit Agarwal
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{color:"black", }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur
                            </Typography>                </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={classes.item}>
                        <img
                            className={classes.image}
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className={classes.caption}>
                            <Typography variant="h4" gutterBottom style={{color:"black", }}>
                                Consultant
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{color:"black", }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur
                            </Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Paper>
            <Typography align="center">
                <br />
                <Button className={classes.testimonialsBtn} href="/reviews" variant="contained">Let them tell you</Button>
            </Typography>
        </div>
    )
}

export default Testimonials;