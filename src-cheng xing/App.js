import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (isAdmin) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home isAdmin={isAdmin} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
