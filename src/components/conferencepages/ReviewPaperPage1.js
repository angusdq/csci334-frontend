import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';

export default function ReviewPaperPage1Conference() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);
    const paperIdArr = [];

    const handleClick = () => {
      navigate('/reviewpaperpage2conference');
    };

    const handleBackButtonClick = () => {
        navigate('/conferencehomepage');
      };

    useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch('http://localhost:8080/papers');
          const json = await response.json();
          setPapers(json);
        }
        fetchUsers();
      }, []);

      paperData.forEach((obj) => {
        paperIdArr.push(obj.id); 
      });

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
              <p>Select a paper to accept or reject</p>
                <select value={selectedPaper} onChange={handleChangePaper}>
                    <option value="">Select a Paper</option>
                        {paperIdArr.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>View Paper</Button>
            </div>
      </>
    )
}