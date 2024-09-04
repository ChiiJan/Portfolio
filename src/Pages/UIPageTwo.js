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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Task #1" {...a11yProps(0)} />
                        <Tab label="Task #2" {...a11yProps(1)} />
                        <Tab label="Coming Soon" {...a11yProps(2)} />
                    </Tabs>

                    <TabPanel value={value} index={0}>
                        <Typography variant="h6" gutterBottom >
                            Redesign: Minimalist Sign up Screen Design about Productivity
                        </Typography>
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
                        Coming Soon
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
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