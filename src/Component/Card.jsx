import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../css/home.css';

function Tag({ tagname }) {
  if (tagname === "UI/UX") {
    return <span id='tag-ui'>{tagname} </span>;
  } else if (tagname === "Web Development") {
    return <span id='tag-web'>{tagname} </span>;
  } else if (tagname === "Graphic Design") {
    return <span id='tag-graphic'>{tagname} </span>;
  } else if (tagname === "Other") {
    return <span id='tag-other'>{tagname} </span>;
  }
  else
    return <span id='tag-null'>{tagname} </span>;
}

//import WorkOne from '../Pages/WorkNumOne.js'; 
export const HomeCard = ({
  imgsrc,
  imgalt,
  title,
  description,
  location,
  tagName
}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 345, height: 380 }}>
      <CardActionArea onClick={() => navigate(location)} >
        <CardMedia
          component="img"
          sx={{ width: 320, height: 140, ml: 1.5, mr: 1.5, mt: 1.5 }}
          image={imgsrc}
          alt={imgalt}
        />

        <CardContent sx={{ height: 240 }}>
          <div id="tag">
            <Tag
              tagname={tagName}
            />
          </div>
          <Typography gutterBottom variant="h6" >
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