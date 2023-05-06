import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import Home from "./components/Home";



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setRegister] = useState(false);

  
  

  function handleLogin() {
    setLoggedIn(true);
    setRegister(false);
  }

  function handleRegisterClick() {
    setRegister(true);
    setLoggedIn(false);
  }



  if (loggedIn) {
    return <Home onLogout={() => setLoggedIn(false)} />;
  } else if (showRegister) {
    return (
    <Register onRegister={() => setRegister(false)} />
    );
  } else {
    return (
      <LoginForm onLogin={handleLogin} onRegister={handleRegisterClick} />
    );
  }
}

export default App;