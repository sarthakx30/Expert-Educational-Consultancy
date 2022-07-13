import React from 'react';
import CarouselComponent from '../components/carousel';
import { Container, Typography, makeStyles, Button } from "@material-ui/core";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Testimonials from "../components/testimonials";

import image1 from "../images/carousel-images/carousel-image-1.jpg";
import image2 from "../images/carousel-images/carousel-image-2.jpeg";
import image3 from '../images/carousel-images/carousel-image-3.jpg';

const useStyles = makeStyles((theme) => ({
    aboutBtn: {
        margin: "20px",
        background: "yellow",
        color: "#36498f",
        borderRadius: "10px",
        // transition: "all 0.3s ease",
        "&:hover,&:focus": {
            color: "yellow",
            background: "linear-gradient(to right bottom,#36498f,#3649f6)"
        }
    }
}));

const Home = () => {
    const classes = useStyles();
    const items = [
        image1, image2, image3
    ]
    return (
        <div width="100%">
            <CarouselComponent />
            <Container style={{position: "relative",bottom: "150px"}}>
                <div>
                    <Divider
                        sx={{
                            "&::before, &::after": {
                                borderTop: "2px solid orange",
                            },
                        }}
                        className={classes.divider}>
                        <Chip
                            sx={{
                                background: "linear-gradient(to right bottom,yellow,orange)"
                            }}
                            label="About Us"
                            className={classes.chip}
                        />
                    </Divider>
                    <Typography variant="body1" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        <br />
                        <Button className={classes.aboutBtn} href="/about" variant="contained">Get To Know Us Better</Button>
                    </Typography>
                </div>
                <Testimonials/>
            </Container>
        </div>
    )
}

export default Home;