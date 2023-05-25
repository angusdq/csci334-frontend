import { React } from 'react';
import '../../App.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon } from '@mui/material';

export default function SubmitPaperPage1() {
    
    const navigate = useNavigate();

    const [selectedAuthor, setSelectedAuthor] = useState([]);
    const [paperData, setPapers] = useState([]);
    const [authorData, setAuthors] = useState([]);
    const authorIdArr = [];


    const handleClick = () => {
      console.log(selectedAuthor)
      const data = {
        rating: null,
        comment: "hi",
        accepted: true,
        authorIds: selectedAuthor,// add author id array here
        reviewerIds: null
      };

      fetch("http://localhost:8080/createPaper",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
      }).then(()=>{
          navigate('/submitpaperpage2');
      })    
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

      useEffect(() => {
        async function fetchUsers() {        
          const response = await fetch('http://localhost:8080/authors');
          const json = await response.json();
          setAuthors(json);
        }
        fetchUsers();
      }, []);

      authorData.forEach((obj) => {
        authorIdArr.push(obj.name); 
      });


      function handleChangeAuthor(event) {
        const selected = Array.from(event.target.selectedOptions).map(
          (option) => parseInt(option.value)
        );
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
                <p>Paper #{paperData.length+1}</p>

                <select multiple value={selectedAuthor} onChange={handleChangeAuthor}>
                    <option value="">Select Authors</option>
                        {authorIdArr.map((option, index) => (
                    <option key={option} value={index}>
                        {option}
                    </option>
                    ))}
                </select>
                <Button class="buttonRegisterPage" variant="contained" onClick={handleClick}>Submit Paper</Button>
            </div>
      </>
    )
}