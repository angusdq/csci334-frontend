import React from "react"
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function SubmitPaperPage2() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/authorhomepage');
    };

    
    return (
        <>
            <div>
                <h1>Your paper has been submitted</h1>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Return home</Button>
            </div>
        </>
    )
}