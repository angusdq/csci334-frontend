import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [userType, setUserType] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  function handleUserTypeChange(event) {
    setUserType(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username,
      password,
      email,
      fullName,
      photo,
      userType
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "50%" }}>
        <Typography variant="h2" align="center" gutterBottom>
          Register
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Username"
              fullWidth
              required
              value={username}
              onChange={handleUsernameChange}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={handleEmailChange}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Full Name"
              fullWidth
              required
              value={fullName}
              onChange={handleFullNameChange}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5">
               Please upload the document for identity verfication
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </Box>
          <Box>
          <FormControl sx={{ mb: 3 }} component="fieldset" variant="standard" required >
            <FormLabel component="legend">User type</FormLabel>
               <FormGroup>
                <FormControlLabel
                  control={
                   <Checkbox
                   checked={userType === 'author'}
                   onChange={handleUserTypeChange}
                   value="author"
                />
                }
                label="Author"
                />
                <FormControlLabel
                   control={
                   <Checkbox
                   checked={userType === 'conference'}
                   onChange={handleUserTypeChange}
                   value="conference"
                />
                }
                 label="Conference"
                /> 
                <FormControlLabel
                   control={
                   <Checkbox
                   checked={userType === 'reviewer'}
                   onChange={handleUserTypeChange}
                   value="reviewer"
                />
                }
                 label="Reviewer"
                />      
              </FormGroup>
              </FormControl>
              </Box>
            
            
               <Box>
                 <Button type="submit" variant="contained">
                  Register
                 </Button>
               </Box>
           
        </form>
        </Box>  
    </Box>
  );
};

export default Register;          
