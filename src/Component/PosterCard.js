import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import '../css/webdevelopment.css';

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



export const PosterCard = ({
    imgsrc,
    imgalt,
    title,
    subtitle,
    modaltext,
    modaltext2,
    modaltext3
}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card className='Card'>
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    component="img"
                    height="250"
                    image={imgsrc}
                    alt={imgalt}
                />
                <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle" component="div">
                        {subtitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
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
                                <img
                                    height="400"
                                    src={imgsrc}
                                    alt={imgalt}></img>
                            </div>
                            <div>
                                <Typography variant="h5" fontWeight="bold">
                                    {title}
                                </Typography>
                                <Typography gutterBottom variant="subtitle" component="div">
                                    {subtitle}
                                </Typography>
                                <Typography id="body1" sx={{ mt: 2 }}>
                                    {modaltext}
                                </Typography>
                                <Typography id="body1" sx={{ mt: 1 }}>
                                    {modaltext2}
                                </Typography>
                                <Typography id="body1" sx={{ mt: 1 }}>
                                    {modaltext3}
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </Card>
    );
}