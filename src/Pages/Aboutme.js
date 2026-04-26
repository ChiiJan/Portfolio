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
      <h1>About me</h1>
      <div className="right-content">
            <p><span id="span"><WorkIcon></WorkIcon> Currently</span> </p>
            <p>Admin and Support Programme (Contract) @ Health Promotion Board</p>
            <Button id= "knowmebutton" onClick={() => navigate("/Resume")}>Past Experience and School Project(s) → </Button>
        </div>
        <div className="right-content">
            <p><span id="span"><Face3Icon /> What I do </span> </p>
            <p>Hi! I’m Janice — an Information Systems graduate with an interest in administrative support, operations, and data reporting. I enjoy keeping things organised, improving workflows, and supporting smoother day-to-day decisions. I’m currently looking for opportunities where I can contribute to operations and continue growing professionally.</p>
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
