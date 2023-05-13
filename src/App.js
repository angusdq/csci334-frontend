import { Routes, Route } from 'react-router-dom';
import SelectUserLogin from './components/registerPages/LoginForm';
import AuthorLoginPage from './components/registerPages/AuthorLoginPage';
import ReviewerLoginPage from './components/registerPages/ReviewerLoginPage';
import ConferenceLoginPage from './components/registerPages/ConferenceLoginPage';
import SystemAdmingLoginPage from './components/registerPages/SystemAdminLoginPage';
import SelectUserSignUp from './components/registerPages/Register';
import AuthorHomePage from './components/authorpages/AuthorHomePage';
import ReviewerHomePage from './components/reviewerpages/ReviewerHomePage';
import ConferenceHomePage from './components/conferencepages/ConferenceHomePage';
import SystemAdminHomePage from './components/systemadminpages/SystemAdminHomePage';
import SubmitPaperPage1 from './components/authorpages/SubmitPaperPage1';
import SubmitPaperPage2 from './components/authorpages/SubmitPaperPage2';
import ViewPaperPage1 from './components/authorpages/ViewPaperPage1';
import ViewPaperPage2 from './components/authorpages/ViewPaperPage2';
import ViewPaperPage3 from './components/authorpages/ViewPaperPage3';
import ViewPaperPage4 from './components/authorpages/ViewPaperPage4';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<SelectUserLogin />} />
          <Route path="/authorlogin" element={<AuthorLoginPage />} />
          <Route path="/reviewerlogin" element={<ReviewerLoginPage />} />
          <Route path="/conferencelogin" element={<ConferenceLoginPage />} />
          <Route path="/systemadminlogin" element={<SystemAdmingLoginPage />} />
          <Route path="/signupselectuser" element={<SelectUserSignUp />} />
          <Route path="/authorhomepage" element={<AuthorHomePage />} />
          <Route path="/reviewerhomepage" element={<ReviewerHomePage />} />
          <Route path="/conferencehomepage" element={<ConferenceHomePage />} />
          <Route path="/systemadminhomepage" element={<SystemAdminHomePage />} />
          <Route path="/submitpaperpage1" element={<SubmitPaperPage1 />} />
          <Route path="/submitpaperpage2" element={<SubmitPaperPage2 />} />
          <Route path="/viewpaperpage1" element={<ViewPaperPage1 />} />
          <Route path="/viewpaperpage2" element={<ViewPaperPage2 />} />
          <Route path="/viewpaperpage3" element={<ViewPaperPage3 />} />
          <Route path="/viewpaperpage4" element={<ViewPaperPage4 />} />
       </Routes>
    </>
 );
};

export default App;