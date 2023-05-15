import { Button, Icon } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function ReviewPaperPage3Conference() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/reviewpaperpage4conference');
    };

    const handleBackButtonClick = () => {
        navigate('/reviewpaperpage2conference');
    };

    return (
        <>
            <div class="back-arrow">
                <Icon>
                <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
                </Icon>
            </div>

            <div class='selectUserRegisterStyle'>        
                <p>Would you like to email the author now?</p>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Email now</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Not right now</Button>
            </div>
        </>
    )
}