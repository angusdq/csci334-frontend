import { React, useState } from 'react';
import '../../App.css'
import { Button, Drawer } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function AuthorHomePage(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/submitpaperpage1');
    };

    const handleClick2 = () => {
        navigate('/viewpaperpage1');
    };

    const handleClickSystemAdmin = () => {
        navigate('/systemadminhomepage');
    };

    const handleClickReviewer = () => {
        navigate('/reviewerhomepage');
    };

    const handleClickConference = () => {
        navigate('/conferencehomepage');
    };

    const handleClickSignOut = () => {
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return(
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickSystemAdmin} >System Admin</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickReviewer} >Reviewer</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickConference} >Conference</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickSignOut} >Sign out</Button>
            </Drawer>

            <div class='selectUserRegisterStyle'>        
                <p>Select User to Register</p>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Submit a Paper</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick2} >View Papers</Button>
            </div>
        </>  
    )
} 