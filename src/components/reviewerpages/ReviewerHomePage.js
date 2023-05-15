import { React, useState } from 'react';
import '../../App.css'
import { Button, Drawer } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ReviewerHomePage(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/bidpaperpage1');
    };

    const handleClick2 = () => {
        navigate('/reviewpaperpage1reviewer');
    };

    const handleClick3 = () => {
        navigate('/viewpaperpage1reviewer');
    };

    const handleClickSystemAdmin = () => {
        navigate('/systemadminlogin');
    };

    const handleClickAuthor= () => {
        navigate('/authorlogin');
    };

    const handleClickConference = () => {
        navigate('/conferencelogin');
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
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickAuthor} >Author</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickConference} >Conference</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickSignOut} >Sign out</Button>
            </Drawer>

            <div class='selectUserRegisterStyle'>        
                <p>Reviewer Home Page</p>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Bid on a Paper</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick2} >Review Papers</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick3} >View Papers</Button>
            </div>
        </>  
    )
} 