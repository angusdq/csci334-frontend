import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';
import { idGlobalReviewer } from '../registerPages/ReviewerLoginPage';



export default function ReviewPaperPage1Reviewer() {

    const navigate = useNavigate();
    const [selectedPapers, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);

    const data = {
      id: idGlobalReviewer,
      name: paperData.name,
      username: paperData.username,
      password: paperData.password,
      bids: selectedPapers,
    }

    useEffect(() => {
      async function fetchUsers() {        
        const response = await fetch(`http://localhost:8080/reviewer/${idGlobalReviewer}`);
        const json = await response.json();
        setPapers(json);
      }
      fetchUsers();
    }, []);

    const handleClick = () => {  
      fetch(`http://localhost:8080/updateReviewer/${idGlobalReviewer}`,{
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
      })
      .then(response => response.json())
      .then(()=>{
        
        navigate('/bidpaperpage2');
      })    
    };

    const handleBackButtonClick = () => {
        navigate('/reviewerhomepage');
      };

      function handleChangePaper(event) {
        setSelectedPaper(event.target.value);
      }
    
    return (
        <>
            <div class="back-arrow">
                <Icon>
                <ArrowBackIosIcon fontSize="large" onClick={handleBackButtonClick}/>
                </Icon>
            </div>

            <div class="selectUserRegisterStyle">
              <p>How many papers would you like to review?</p>
                <select value={selectedPapers} onChange={handleChangePaper}>
                    <option value="">Select how many</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                </select>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Submit prefferences</Button>
            </div>
      </>
    )
}