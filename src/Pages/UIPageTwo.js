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
                        sx={{ borderRight: 1, borderColor: 'divider', width: '24%' }}
                    >
                        <Tab label="Task #1" {...a11yProps(0)} />
                        <Tab label="Task #2" {...a11yProps(1)} />
                        <Tab label="Task #3" {...a11yProps(2)} />
                        <Tab label="Task #4" {...a11yProps(3)} />
                    </Tabs>

                    <TabPanel value={value} index={0}>

                        <Typography variant="h6" gutterBottom >
                            Redesign: Minimalist Sign up Screen Design about Productivity
                        </Typography>

                        My first challenge was to design a sign-up form or page, but I wanted to connect it with a meaningful project.
                        While I had previously done a quick redesign of a mobile app's login and sign-up screens,
                        I was more interested in tackling a web-based version.
                        As I reviewed my past work, I came across an individual assignment focused on productivity.
                        This seemed like the perfect opportunity to revisit and improve the project,
                        especially after noticing several poor design choices I made at the time.
                        It gave me a chance to refine and elevate the overall design.

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
                            Cart Checkout form
                        </Typography>
                        My second challenge was to create a credit card checkout form or page.
                        This led me to think of the overall cart checkout experience,
                        so I decided to design both a cart checkout page and a credit card input form.
                        I drew inspiration from Lazada’s mobile design due to its simplicity and user-friendly cart summary.
                        However, I made some tweaks to the design, such as consolidating all payment options on a single page,
                        rather than directing users to a separate one.
                        If given the opportunity, I’d like to gather user feedback to assess whether this approach enhances the convenience of selecting different payment methods.
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
                        The third challenge was to design a landing page, which raised the question: what should the main focus be?
                        Referring back to my first challenge,
                        I chose to redesign the landing page for the productivity project I had previously worked on.
                        During my research, I realized that an effective landing page should extend the core product message,
                        something I hadn’t fully utilized in my original design.
                        For this redesign, I focused on adding more details,
                        such as highlighting the key features of the productivity web app and incorporating a more prominent call-to-action button to drive engagement.
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
                        For the fourth challenge, I was tasked with designing a calculation element.
                        Instead of creating a traditional calculator, I opted to design a Pomodoro timer,
                        a time management tool that enhances focus, reduces distractions, and boosts productivity.
                        This choice aligns with the productivity project I previously worked on.
                        Through my research, I discovered that calculation elements can include interactive components
                        and data visualization features beyond just calculators. A Pomodoro timer fits this concept well,
                        as it allows users to input their desired focus duration. The system then saves and calculates the
                        time spent and the number of Pomodoros completed, presenting this data in a report on a separate page of
                        the web app.
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