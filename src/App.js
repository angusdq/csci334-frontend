import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/registerPages/LoginForm';
import SelectUserSignUp from './components/registerPages/Register';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signupselectuser" element={<SelectUserSignUp />} />
       </Routes>
    </>
 );
};

export default App;