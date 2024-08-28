import '../css/ui.css';
import { styled } from '@mui/material/styles';
import Navbar from '../Component/Navbar.js';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #a8886e',
    '& .MuiTabs-indicator': {
        backgroundColor: '#ff7300',
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: '100%',
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
            <header className="UIheader">
                <Navbar />
                <h1>Delifit UX Redesign: Enhancing the Login and Registration Experience</h1>
            </header>
            <body className="UI-body">
                <div>
                    <Box sx={{ width: '100%' }}>
                        <Box>
                            <AntTabs value={value} onChange={handleChange} aria-label="tabs">
                                <AntTab label="Final Result" {...a11yProps(0)} />
                                <AntTab label="Redesign Process" {...a11yProps(1)} />
                            </AntTabs>
                        </Box>
                        
                        <CustomTabPanel value={value} index={0}>
                           <div className='result-design'>
                            <h2>Final Result and Prototype</h2>
                            <img src={require('../assets/mockup1.png')} alt="mockup image" />
                            <p>Explore and interact with this Figma prototype. </p>

                            <iframe 
                            style={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            width: '100%', 
                            height: 1000 }}
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjWiZdtlG2T8mf5JvgYgZSz%2FJanice's-Portfolio%3Fpage-id%3D1%253A2%26node-id%3D199-10443%26viewport%3D2165%252C2834%252C0.19%26t%3D44Qn2NvXtUaZcUgd-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26starting-point-node-id%3D199%253A10422%26show-proto-sidebar%3D1" allowfullscreen>

                            </iframe>
                           </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                        <div className='design-process'>

                        </div>
                        </CustomTabPanel>

                    </Box>
                </div>


            </body>
            <footer className="footer">
            </footer>
        </div>
    );
}

export default UIOne;