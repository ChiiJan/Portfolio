import '../css/nav.css';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className='nav'>
            <Button id= "button" onClick={() => navigate("/Portfolio")}>Janice Chua</Button>
            
            <Stack direction="row" spacing={2}>
                <Button id= "button" onClick={() => navigate("/Resume")}>Resume</Button>
                <Button id= "button" disabled>About</Button>
                <Button id= "button" disabled>Projects</Button>
            </Stack>
        </nav>
    )
}
