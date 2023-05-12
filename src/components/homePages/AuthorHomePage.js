import React from 'react'
import '../../App.css'
import { Button, Icon } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function AuthorHomePage(){
    const navigate = useNavigate();

    return(
        <>
            <div class='buttonRegisterPage'>        
                <p>Select User to Register</p>
                <Button class="buttonRegisterPage" variant="contained" >Submit Paper</Button>
                <Button class="buttonRegisterPage" variant="contained" >View Papers</Button>
            </div>
        </>
    )

} 