import { React, useState } from 'react';
import '../../App.css'
import { Button, Drawer } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ConferenceHomePage(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/submitpaperpage1');
    };

    const handleClick2 = () => {
        navigate('/viewpaperpage1');
    };

    const handleClick3 = () => {
        navigate('/viewpaperpage1');
    };

    const handleClickSystemAdmin = () => {
        navigate('/systemadminlogin');
    };

    const handleClickAuthor= () => {
        navigate('/authorlogin');
    };

    const handleClickReviewer = () => {
        navigate('/reviewerlogin');
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
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickReviewer} >Reviewer</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClickSignOut} >Sign out</Button>
            </Drawer>

            <div class='selectUserRegisterStyle'>        
                <p>Conference Home Page</p>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Bid on a Paper</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick2} >Review Papers</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick3} >View Papers</Button>
            </div>
        </>  
    )
} 