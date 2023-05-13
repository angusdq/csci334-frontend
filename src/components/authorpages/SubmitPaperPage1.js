import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';


export default function SubmitPaperPage1() {
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/submitpaperpage2');
    };

    const handleBackButtonClick = () => {
        navigate('/authorhomepage');
      };

    const [selectedPaper, setSelectedPaper] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState([]);
    const [paperData, setPapers] = useState([]);
    const [authorData, setAuthors] = useState([]);
    const paperIdArr = [];
    const authorIdArr = [];

    useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch('http://localhost:8080/papers');
          const json = await response.json();
          setPapers(json);
        }
        fetchUsers();
      }, []);

      useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch('http://localhost:8080/authors');
          const json = await response.json();
          setAuthors(json);
        }
        fetchUsers();
      }, []);

      

      paperData.forEach((obj) => {
        paperIdArr.push(obj.id); 
      });

      authorData.forEach((obj) => {
        authorIdArr.push(obj.name); 
      });


      function handleChangePaper(event) {
        setSelectedPaper(event.target.value);
      }

      function handleChangeAuthor(event) {
        const selected = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedAuthor(selected);
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

                <select multiple value={selectedAuthor} onChange={handleChangeAuthor}>
                    <option value="">Select Authors</option>
                        {authorIdArr.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Submit Paper</Button>
            </div>
      </>
    )
}