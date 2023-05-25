import { React, useState } from 'react';
import '../../App.css'
import { Button, Drawer } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { idGlobal } from '../registerPages/AuthorLoginPage';

export default function AuthorHomePage(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/submitpaperpage1');
    };

    const handleClick2 = () => {
        navigate('/viewpaperpage1');
    };

    const handleClickSystemAdmin = () => {
        navigate('/systemadminlogin');
    };

    const handleClickReviewer= () => {
        navigate('/reviewerlogin');
    };

    const handleClickConference = () => {
        navigate('/conferencelogin');
    };

    const handleClickSignOut = () => {
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleDrawer = () => {
        console.log(idGlobal);
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
                <p>Author Home Page</p>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick} >Submit a Paper</Button>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick2} >View Papers</Button>
            </div>
        </>  
    )
} 