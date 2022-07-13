import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles, Typography } from '@material-ui/core';

import image1 from "../images/carousel-images/carousel-image-1.jpg";
import image2 from "../images/carousel-images/carousel-image-2.jpeg";
import image3 from '../images/carousel-images/carousel-image-3.jpg';

const useStyles = makeStyles(() => ({
    image: {
        width: "100%",
        height: "400px",
        objectFit: "cover",
        opacity: 0.5
    },
    item: {
        background: "#090f23",
        height: "400px",
    },
    carousel:{
        position: "relative",
        bottom:"180px",
        zIndez:0,
        width: "100%",
    },
    caption:{
        position: "relative",
        // bottom:"200px",
        // right:"100px"
        bottom:"220px",
        left:0
    }
}));

const CarouselComponent = () => {
    const classes = useStyles();
    return (
        <Carousel className={classes.carousel}>
        {/* <Typography>Helllo</Typography> */}
            <Carousel.Item className={classes.item}>
                <img
                    className={classes.image}
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption className={classes.caption}>
                    <Typography variant="h4" gutterBottom style={{ textShadow: "#000 1px 0 10px" }}>
                        h4. Heading
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ textShadow: "#000 1px 0 10px" }}>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
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
                    <Typography variant="h4" gutterBottom style={{ textShadow: "#000 1px 0 10px" }}>
                        h4. Heading
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ textShadow: "#000 1px 0 10px" }}>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
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
                    <Typography variant="h4" gutterBottom style={{ textShadow: "#000 1px 0 10px" }}>
                        h4. Heading
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ textShadow: "#000 1px 0 10px" }}>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur
                    </Typography>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;