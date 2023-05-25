import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';
import { idGlobal } from '../registerPages/AuthorLoginPage';

export let paperAuthorGlobal = '';

export default function ViewPaperPage1() {

    const navigate = useNavigate();
    const [selectedPaper, setSelectedPaper] = useState('');
    const [paperData, setPapers] = useState([]);
    const paperIdArr = [];

    const handleClick = () => {
      paperAuthorGlobal = selectedPaper;
      console.log(paperAuthorGlobal, 'pag')
      navigate('/viewpaperpage2');
    };

    const handleBackButtonClick = () => {
        navigate('/authorhomepage');
      };

    useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch('http://localhost:8080/papers');
          const json = await response.json();
          setPapers(json);
        }
        fetchUsers();
      }, []);

      //If the author has a paper, add the paper to the paperIdArr
      paperData.forEach(paper => {
        paper.authorIds.forEach(num => {
          if (num === idGlobal) {
            paperIdArr.push(paper.id);
          }
        });
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