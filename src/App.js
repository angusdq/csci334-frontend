import { Routes, Route } from 'react-router-dom';
import LogInPage from './components/LogInPage';
import Home from './components/Home';
import SystemAdminHome from './components/SystemAdminHome';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/systemadminhome" element={<SystemAdminHome />} />
       </Routes>
    </>
 );
};

export default App;