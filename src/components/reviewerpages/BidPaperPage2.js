import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function BidPaperPage2() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/reviewerhomepage');
    };
    
    return (
        <div>
            <h1>Your prefferences have been submitted</h1>
            <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Return home</Button>
        </div>
    )
}