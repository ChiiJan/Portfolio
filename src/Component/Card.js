import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";


//import WorkOne from '../Pages/WorkNumOne.js'; 
export const HomeCard = ({
imgsrc, 
imgalt,
title,
description,
location
}) => {
const navigate = useNavigate();
  return (
    <Card sx={{ width: 345, height: 345 }}>
      <CardActionArea onClick={() => navigate(location)}>
        <CardMedia
          component="img"
          height="140"
          image={imgsrc}
          alt={imgalt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}