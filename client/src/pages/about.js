import React, { useEffect } from 'react';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';


const useStyles = makeStyles(() => ({
    text: {
        fontFamily: "Nunito Sans",
        fontWeight: "600",
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const About = ({ navbar, setNavbar }) => {
    const classes = useStyles();
    useEffect(() => {
        setNavbar(true);
    }, [])
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container style={{ margin: "80px auto" }}>
            <Typography className={classes.text} align="center" variant="h2" style={{ color: "orange", textShadow: "1px 1px 3px #0411af", marginBottom: "10px" }}>About Us</Typography>
            <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="About UG" {...a11yProps(0)} />
                <Tab label="About PG" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography className={classes.text} align="center" variant="body1">Expert Educational Consultancy was conceptualised and incorporated in 1995 with a permanent office in Delhi, in response to the growing concerns in MBBS admissions in India about fraud, misguidance and cheating by several unscrupulous touts masquerading as admission counsellors.
                    To combat this growing issue and offer complete transparency, Expert Educational Consultancy uses Artificial Intelligence and Data Analytics to help students.
                    Expert Educational Consultancy started services in 1995 in all professional courses and in 2016 Expert Educational Consultancy launched the personalised counselling services for students/parents. Expert Educational Consultancy laid the foundation of data analysis based specialised and ethical medical admission counselling in India. We are the very first in India to incorporate advanced medical admission data mining and counselling intelligence tools in forecasting the medical admission probability of students on basis of their NEET UG AIR Rank, Domicile, Category and Fees Budget.
                    Unlike traditional generalised heuristics-based admission guidance, NEET UG Expert Educational Consultancy offers highly personalised, data mining and forecasting tools to accurately and ethically guide the students/ parents through the Medical Admission Counselling Process.
                    We proudly claim 90% accuracy on the college prediction model and over 95% client success rate.
                    Expert Educational Consultancy data advisory services are now being used by India’s leading medical admission counselling service providers.
                    Our Mission…
                    is to guide every student in our NEET UG Expert Educational Consultancy family to get an admission in the Best Medical College as per their NEET UG All India Rank, Category, Domicile & Fees Budget in the most ethical, transparent, economic and comfortable way possible.
                    At Our Core -
                    Value for money we strive to offer our services at the most affordable prices so that all students/ parents can avail genuine guidance on medical admission counselling process without any fear of cheating.
                    Integrity, we offer 100% transparent, honest and authentic services to all students/parents. We ensure that there is integrity in our communication, services and activities.
                    Trust, we strive to develop empathy and respect towards each student/ parent and all stakeholders. We work towards enhancing mutual trust between our customers and stakeholders.
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography className={classes.text} align="center" variant="body1">Expert Educational Consultancy was conceptualised and incorporated in 1995 with a permanent office in Delhi, in response to the growing concerns in MBBS admissions in India about fraud, misguidance and cheating by several unscrupulous touts masquerading as admission counsellors.
                    Expert Educational Consultancy was conceptualised and incorporated in 1995 with a permanent office in Delhi, in response to the growing concerns in MD / MS / DNB / Diploma / FCPS / CPS admissions in India about fraud, misguidance and cheating by several unscrupulous touts masquerading as admission counsellors.
                    To combat this growing issue and offer complete transparency, Expert Educational Consultancy uses Artificial Intelligence and Data Analytics to help students.
                    Expert Educational Consultancy started services in 1995 in all professional courses and in 2016 Expert Educational Consultancy launched the personalised counselling services for students/parents. Expert Educational Consultancy laid the foundation of data analysis based specialised and ethical medical admission counselling in India. We are the very first in India to incorporate advanced medical admission data mining and counselling intelligence tools in forecasting the medical admission probability of students on basis of their NEET PG AIR Rank, Domicile, Category, Branch and Fees Budget.
                    Unlike traditional generalised heuristics-based admission guidance, NEET PG Expert Educational Consultancy offers highly personalised, data mining and forecasting tools to accurately and ethically guide the students/ parents through the Medical Admission Counselling Process.
                    We proudly claim 90% accuracy on the college prediction model and over 95% client success rate.
                    Expert Educational Consultancy data advisory services are now being used by India’s leading medical admission counselling service providers.
                    Our Mission…
                    is to guide every student in our NEET PG Expert Educational Consultancy family to get an admission in the Best Medical College as per their NEET PG AIR Rank, Domicile, Category, Branch and Fees Budget in the most ethical, transparent, economic and comfortable way possible.
                    At Our Core -
                    Value for money we strive to offer our services at the most affordable prices so that all students/ parents can avail genuine guidance on medical admission counselling process without any fear of cheating.
                    Integrity, we offer 100% transparent, honest and authentic services to all students/parents. We ensure that there is integrity in our communication, services and activities.
                    Trust, we strive to develop empathy and respect towards each student/ parent and all stakeholders. We work towards enhancing mutual trust between our customers and stakeholders.

                </Typography>
            </TabPanel>
        </Container>
    )
}

export default About;