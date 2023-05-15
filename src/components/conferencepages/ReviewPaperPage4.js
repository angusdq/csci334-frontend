import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ReviewPaperPage4Conference() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/conferencehomepage');
    };
    
    return (
        <div>
            <h1>Your review has been submitted</h1>
            <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Return home</Button>
        </div>
    )
}