import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/webdevelopment.css';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export const ImpactCard = ({
    displayIcon,
    displayText,
    impact1,
    impact2,
    impacticon1,
    impacticon2

}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>

            <div className='InfoContent-layout'>
                
                {displayIcon}

                <Typography variant="h5" fontWeight="bold" sx={{ mt: 1,}} >
                    {displayText}
                </Typography>
            </div>

            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
           
                <CardContent className='InfoExpanded-layout'>
                    {impacticon1}
                    <Typography paragraph variant='body1'>
                        {impact1}
                    </Typography>
                </CardContent>
                <CardContent className='InfoExpanded-layout'>
                    {impacticon2}
                    <Typography paragraph variant='body1'>
                        {impact2}
                    </Typography>

                </CardContent>
                
            </Collapse>
        </Card>
    );
}