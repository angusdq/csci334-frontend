import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SystemAdminHome from './components/SystemAdminHome';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/systemadminhome" element={<SystemAdminHome />} />
       </Routes>
    </>
 );
};

export default App;