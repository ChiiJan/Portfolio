import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #e1e1e1',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px',
};

function Pointer({ content }) {
    if (content) {
        return <li>{content} </li>;
    }
    else
        return <span id='tag-null'>{content} </span>;
}

function GotImg({ isImg, imgSrc, imgAlt }) {
    if (isImg) {
        return <span id='imgStyle'>
            <img
                height="320"
                src={imgSrc}
                alt={imgAlt} />
        </span>;
    }
    else
        return <span id='tag-null'></span>;
}


export const TimelineDetail = ({
    title,
    subtitle,
    date,
    icon,
    color,
    pointOne,
    pointTwo,
    pointThree,
    pointFour,
    pointFive,
    imgsrc,
    imgalt,
    isImg
}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let spanRef = React.createRef()
    return (
        <div>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    {date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color={color} onClick={handleOpen}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: 6, px: 2 }}>
                    <Typography variant="h6" component="span">
                        {title}
                    </Typography>
                    <Typography>{subtitle}</Typography>
                </TimelineContent>
            </TimelineItem>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='Content-layout'>

                            <div>
                                <Typography variant="h5" fontWeight="bold">
                                    {title}
                                </Typography>
                                <Typography gutterBottom variant="subtitle" component="div">
                                    {subtitle}
                                </Typography>
                                <Typography id="body1" sx={{ mt: 2, mr: 2 }}>
                                    <ul id='list'>
                                        <Pointer content={pointOne} />
                                        <Pointer content={pointTwo} />
                                        <Pointer content={pointThree} />
                                        <Pointer content={pointFour} />
                                        <Pointer content={pointFive} />
                                    </ul>
                                </Typography>

                                <GotImg 
                                isImg={isImg} 
                                imgSrc={imgsrc} 
                                imgAlt={imgalt} />

                                
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}