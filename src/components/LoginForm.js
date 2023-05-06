import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';

const LoginForm = ({ onLogin , onRegister}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    onLogin(true);
  
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    onRegister(true);
  
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
      <Box align="right">
          <Button type="submit" variant="contained">Sign up</Button>
      </Box>
      </form>
      <Typography variant="h3" align="center" gutterBottom>
        Login
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Sign in to your account
      </Typography>
      {error && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </Box>
      )}
        <Box sx={{ mb: 2 }} align="center" >
          <TextField 
            label="Username"
            required
            value={username}
            onChange={handleUsernameChange}
          />
        </Box>
        <Box sx={{ mb: 2 }} align="center">
          <TextField
            label="Password"
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </Box>
        <Stack direction="row" justifyContent="center" spacing={2} >
        <form onSubmit={handleSubmit}>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
        <form onSubmit={handleRegister}>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </form>
        </Stack>
    </div>
  );
};

export default LoginForm;
