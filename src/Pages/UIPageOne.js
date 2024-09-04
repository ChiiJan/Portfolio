import '../css/ui.css';
import { styled } from '@mui/material/styles';
import Navbar from '../Component/Navbar.js';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #a8886e',
    '& .MuiTabs-indicator': {
        backgroundColor: '#ff7300',
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: '48%',
    [theme.breakpoints.up('md')]: {
        minWidth: '50%',
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    '&:hover': {
        color: '#f88629',
        opacity: 2,
    },
    '&.Mui-selected': {
        color: '#ff7300',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#a8886e',
    },
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function UIOne() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="UI-Login">
            <Navbar />
            <div className="UI-body">

                <AntTabs value={value} onChange={handleChange} aria-label="tabs" >
                    <AntTab label="Final Result" {...a11yProps(0)}/>
                    <AntTab label="Redesign Process" {...a11yProps(1)} />
                </AntTabs>


                <CustomTabPanel value={value} index={0} >
                    <div className='result-design'>
                        <h2>Final Result and Prototype</h2>
                        <img src={require('../assets/mockup1.png')} alt="mockup image" />
                        <p>Explore and interact with this Figma prototype. </p>

                        <iframe
                            style={{
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                width: '100%',
                                height: 1000
                            }}
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjWiZdtlG2T8mf5JvgYgZSz%2FJanice's-Portfolio%3Fpage-id%3D1%253A2%26node-id%3D199-10443%26viewport%3D2165%252C2834%252C0.19%26t%3D44Qn2NvXtUaZcUgd-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26starting-point-node-id%3D199%253A10422%26show-proto-sidebar%3D1" allowfullscreen>

                        </iframe>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className='design-process'>
                        <Typography variant="body1" gutterBottom>
                            <b>Login and registration forms are among the most common interfaces in mobile applications. </b>
                            These forms are essential for onboarding users to the platform or application.
                            While they might seem simple to design, they significantly impact the user experience, making it either intuitive or challenging for users.
                            DeliFit is a digital platform catering to busy working adults.
                            Who are looking for convenient access to healthy recipes, meal plans, fitness tips, and the option to order meals or snacks that support their health goals.
                            After gaining a deeper understanding of design systems and further practice in Figma, I decided to revisit this mini project to refine and enhance the design.
                        </Typography>
                        <Accordion sx={{ borderRadius: 2, p: 1, mb: 2, mt: 2 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography variant="h6" gutterBottom>
                                    Splash Page
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" gutterBottom>
                                    A splash screen serves as an app’s first impression. Often overlooked, it typically displays the developer or company details.
                                    Initially, I designed the splash screen simply as a loading indicator, to reassure users that the application was functioning.
                                    However, I later realized that the splash screen also offers an opportunity to provide information about the app and its developers.
                                    This prompted me to add a slogan and a salad bowl icon to better convey what DeliFit represents.
                                </Typography>
                                <div className='image-content'>
                                    <div class='item'>
                                        <img src={require('../assets/Splash-page-old.png')} alt="Splash Page Old Version" />
                                        <span class="caption">Old Version</span>
                                    </div>

                                    <div class='item'>
                                        <img src={require('../assets/Splash-page-new.png')} alt="Splash Page Redesigned Version" />
                                        <span class="caption">Redesigned Version</span>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ borderRadius: 2, p: 1, mb: 2 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography variant="h6" gutterBottom>
                                    Welcome Page
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" gutterBottom>
                                    The welcome page typically serves as an introduction for new visitors, explaining what the app or website is about and often prompting users to take action.
                                    Initially, I believed that a minimalist approach was best.
                                    However, upon reflection, I realized it didn’t fully convey what DeliFit is about.
                                    Additionally, the original design had oversized text and call-to-action elements, which aren’t ideal for mobile design.
                                    I decided to redesign this page by adding a slogan, resizing the elements, and updating the call to action to better represent the platform.
                                </Typography>
                                <div className='image-content'>
                                    <div class='item'>
                                        <img src={require('../assets/Welcome-page-old.png')} alt="Welcome Page Old Version" />
                                        <span class="caption">Old Version</span>
                                    </div>

                                    <div class='item'>
                                        <img src={require('../assets/Welcome-page-new.png')} alt="Welcome Page Redesigned Version" />
                                        <span class="caption">Redesigned Version</span>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion  >
                        <Accordion sx={{ borderRadius: 2, p: 1, mb: 2 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography variant="h6" gutterBottom>
                                    Login Page
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" gutterBottom>
                                    A login screen is typically the first interface users encounter when trying to access a restricted area of a website, app, or any system requiring authentication.
                                    It usually includes fields for a username or email, a password, and often a “remember me” checkbox along with a “forgot password” link.
                                    While there weren’t many changes in the design, the original elements were too large, with inconsistent spacing between them.
                                    For a mobile design, it’s important that the call-to-action buttons and text are appropriately sized to ensure a clean and user-friendly interface.
                                </Typography>

                                <div className='image-content'>
                                    <div class='item'>
                                        <img src={require('../assets/Login-page-old.png')} alt="Login Page Old Version" />
                                        <span class="caption">Old Version</span>
                                    </div>

                                    <div class='item'>
                                        <img src={require('../assets/Login-page-new.png')} alt="Login Page Redesigned Version" />
                                        <span class="caption">Redesigned Version</span>
                                    </div>
                                </div>

                            </AccordionDetails>

                        </Accordion>
                        <Accordion sx={{ borderRadius: 2, p: 1, mb: 2 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography variant="h6" gutterBottom>
                                    Register Page
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" gutterBottom>
                                    A registration page on mobile is where new users can create an account, typically asking for details like name, email, and password, along with any additional information required by the service.
                                    Initially, I aimed to make the process more visually appealing by separating the form into two steps.
                                    However, this approach proved redundant and inconvenient for users.
                                    I later consolidated the form into a single page with all necessary inputs.
                                    Additionally, the original design had oversized elements and inconsistent spacing, which are not ideal for a mobile interface, where call-to-action buttons and text should be properly sized for a smoother user experience.
                                </Typography>

                                <div className='image-content'>
                                    <div class='item'>
                                        <img src={require('../assets/Register-page-old1.png')} alt="Register Page Old Version" />
                                        <span class="caption">Old Version page 1</span>
                                    </div>
                                    <div class='item'>
                                        <img src={require('../assets/Register-page-old2.png')} alt="Register Page Old Version" />
                                        <span class="caption">Old Version page 2</span>
                                    </div>

                                    <div class='item'>
                                        <img src={require('../assets/Register-page-new.png')} alt="Register Page Redesigned Version" />
                                        <span class="caption">Redesigned Version</span>
                                    </div>
                                </div>
                            </AccordionDetails>

                        </Accordion>

                    </div>
                </CustomTabPanel>
            </div>
        </div>
    );
}

export default UIOne;