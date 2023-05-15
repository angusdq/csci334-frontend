import { React } from 'react';
import '../../App.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon, Button } from '@mui/material';

export default function ViewPaperPage2() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);
    const paperIdArr = [];

    const handleClick = () => {
      navigate('/viewpaperpage3');
    };

    const handleBackButtonClick = () => {
        navigate('/viewpaperpage1');
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
        paperIdArr.push(obj.comment); 
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
                <select value={selectedPaper} onChange={handleChangePaper}>
                    <option value="">Select a Comment</option>
                        {paperIdArr.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>View Comment</Button>
            </div>
      </>
    )
}