import { React } from 'react';
import '../../App.css'
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function ViewPaperPage4() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/authorhomepage');
    };
    
    return (
        <div>
            <h1>Your rating of the review has been submitted</h1>
            <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Return home</Button>
        </div>
    )
}