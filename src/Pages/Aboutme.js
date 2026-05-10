import '../css/webdevelopment.css';
import '../css/about.css';
import Navbar from '../Component/Navbar.js';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import WorkIcon from '@mui/icons-material/Work';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Face3Icon from '@mui/icons-material/Face3';

function Aboutme() {
  const navigate = useNavigate();
  return (
    <div>
    <Navbar />
    <body className='about-me-full'>
    <div className = "about-me-left">
      <h1>SELF-INTRODUCTION</h1>
      <img id="pfp" src={require('../assets/pfp3.jpg')} alt="profilepic" />
      <div className="left-content">
            <p><span>Name:</span> Chua Kai Lin Janice</p>
            <p><span>Education:</span> Bachelor of Information Systems @ National University of Singapore (NUS)</p>
            <p><span>Birth:</span> 19 Feb 1999</p>
            <p><span>Phone:</span> (+65) 91544510</p>
            <p><span>Email:</span> chuakailinjanice@gmail.com</p>
            <p><span>MBTI:</span> INFP / INFJ</p>
        </div>
    </div>
    <div className = "about-me-right">
      <div className="right-content">
            <p><span id="span"><WorkIcon></WorkIcon> Currently</span> </p>
            <p>Admin and Support Programme (Contract) @ Health Promotion Board</p>
            <Button id= "knowmebutton" onClick={() => navigate("/Resume")}>Past Experience and School Project(s) → </Button>
        </div>
        <div className="right-content">
            <p><span id="span"><Face3Icon /> What I do </span> </p>
            <p>Hi! I’m Janice 👋 </p>
            <p>I’m an Information Systems graduate from NUS with interests in administrative operations, UI/UX, and improving workflows through thoughtful systems and design. </p>
            <p>I enjoy working behind the scenes to keep things organized, efficient, and running smoothly — whether through operations support, data reporting, or exploring ways to improve everyday processes and user experiences.</p>
            <p>I’m naturally curious and hands-on, and I enjoy turning ideas into projects while continuously learning along the way. This portfolio is a space where I document my work, experiments, and creative explorations as I continue growing both professionally and personally ✨</p>
        </div>
        <div className="right-content">
            <p><span id="span"><AutoAwesomeIcon /> Beyond Work</span> </p>
            <p>Enjoys doing arts such as drawing and beadings, taking scenery and food photos.</p>
        </div>
    </div>
    </body>
    </div>

  );
}

export default Aboutme;
