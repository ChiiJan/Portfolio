import '../css/ui.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../Component/Navbar.js';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, ml: 2, width: '80%' }}>
                    <Typography textAlign={'justify'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function UITwo() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Navbar />
            <div className="Figma-header">
                <h1>My UI/UX Learning Journey with Figma</h1>
            </div>
            <div className='UI2-body'>
                <Box
                    sx={{ flexGrow: 2, bgcolor: 'background.paper', display: 'flex' }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                        sx={{ borderRight: 1, borderColor: 'divider', width: '40%' }}
                    >
                        <Tab label="Task #1" {...a11yProps(0)} />
                        <Tab label="Task #2" {...a11yProps(1)} />
                        <Tab label="Task #3" {...a11yProps(2)} />
                        <Tab label="Task #4" {...a11yProps(3)} />
                    </Tabs>

                    <TabPanel value={value} index={0}>

                        <Typography variant="h6" gutterBottom >
                            Redesign: Minimalist Sign-Up Experience for a Productivity Platform
                        </Typography>

                        This project began as a challenge to design a sign-up interface, but I wanted it to be part of something more meaningful. Rather than creating a standalone screen, I chose to revisit a previous individual assignment focused on productivity.

                        While I had earlier explored a quick redesign of mobile login and sign-up screens, I was more interested in developing a web-based experience. Reviewing my past work, I identified several design decisions that could be improved. This redesign became an opportunity to refine those choices and elevate the overall user experience with a more thoughtful, minimalist approach.

                        <div className='image-content-pg2'>
                            <div class='item-pg2'>
                                <img src={require('../assets/sign-up-old.png')} alt="Sign up Page Old Version" />
                                <span class="caption-pg2">Old Version</span>
                            </div>

                            <div class='item-pg2'>
                                <img src={require('../assets/sign-up-new.png')} alt="Sign up Page Redesigned Version" />
                                <span class="caption-pg2">Redesigned Version</span>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography variant="h6" gutterBottom>
                            Checkout Experience Design: Cart & Payment Flow
                        </Typography>
                        The second challenge focused on designing a credit card checkout form. Rather than treating it as a standalone component, I expanded the scope to consider the entire checkout experience. This led me to design both a cart checkout page and a credit card input form.

                        I drew inspiration from Lazada’s mobile interface, particularly its clear and user-friendly cart summary. Building on this, I introduced adjustments to better streamline the flow—such as consolidating all payment options within a single page instead of redirecting users to a separate screen.

                        Given more time, I would validate this approach through user testing to assess whether presenting all payment methods upfront improves convenience and decision-making during checkout.
                        <div className='image-content-mobile'>

                            <div class='item-mobile'>
                                <img src={require('../assets/cart-checkout-mobilever.png')} alt="Sign up Page Redesigned Version" />
                                <span class="caption-mobile">Adapted for Mobile Screens</span>
                            </div>

                            <div class='item-mobile'>
                                <img src={require('../assets/cart-checkout-credit.png')} alt="Sign up Page Redesigned Version" />
                                <span class="caption-mobile">Adapted for Mobile Screens - Credit/Debit Card pop-up</span>
                            </div>

                            <div class='item-mobile'>
                                <img src={require('../assets/cart-checkout.png')} alt="cart full version" />
                                <span class="caption-mobile">Full Version</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Typography variant="h6" gutterBottom >
                            Redesign: Pomodoro Timer
                        </Typography>
                        The third challenge focused on designing a landing page, prompting me to define a clear and compelling focal point. Building on my first challenge, I chose to redesign the landing page for the same productivity project to create a more cohesive product experience.

                        Through research, I recognised that an effective landing page should clearly communicate and extend the product’s core message—an area I had not fully explored in my original design. In this iteration, I focused on better showcasing the web app’s key features and strengthening the call-to-action to guide user engagement more effectively.

                        This redesign allowed me to refine not just the visual layout, but also how the product story is presented to users.
                        <div className='image-content-pg2'>
                            <div class='item-pg2'>
                                <img src={require('../assets/Landing-page-old.png')} alt="Landing Page Old Version" />

                                <span class="caption-pg2">Old Version</span>
                            </div>

                            <div class='item-pg2'>
                                <img src={require('../assets/Landing-page-new.png')} alt="Landing Page Redesigned Version" />
                                <span class="caption-pg2">Redesigned Version</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Typography variant="h6" gutterBottom >
                            Redesign: Landing Screen Design about Productivity
                        </Typography>
                        The fourth challenge involved designing a calculation-based element. Rather than creating a traditional calculator, I chose to design a Pomodoro timer—a time management tool that supports focus, reduces distractions, and improves productivity.

                        This direction aligns with my broader productivity project, allowing for a more cohesive design approach. Through research, I found that calculation elements can extend beyond basic numerical input to include interactive components and data-driven features.

                        The Pomodoro timer reflects this by enabling users to set their desired focus duration, while the system tracks time spent and the number of completed sessions. This data is then summarised and presented in a report on a separate page, providing users with a clearer view of their productivity patterns over time.
                        <div className='image-content-pg2'>
                            <div class='item-pg2'>
                                <img src={require('../assets/Timer-old.png')} alt="Landing Page Old Version" />

                                <span class="caption-pg2">Old Version</span>
                            </div>

                            <div class='item-pg2'>
                                <img src={require('../assets/Timer-new.png')} alt="Landing Page Redesigned Version" />
                                <span class="caption-pg2">Redesigned Version</span>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </Box>
            </div>
        </div>
    );
}

export default UITwo;