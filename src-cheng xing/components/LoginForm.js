import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onLogin(true);
    
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Login
      </Typography>
      {error && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </Box>
      )}
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
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginForm;
