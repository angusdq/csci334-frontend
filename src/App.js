import { Routes, Route } from 'react-router-dom';
import SelectUserLogin from './components/registerPages/LoginForm';
import AuthorLoginPage from './components/registerPages/AuthorLoginPage';
import ReviewerLoginPage from './components/registerPages/ReviewerLoginPage';
import ConferenceLoginPage from './components/registerPages/ConferenceLoginPage';
import SystemAdmingLoginPage from './components/registerPages/SystemAdminLoginPage';
import SelectUserSignUp from './components/registerPages/Register';
import AuthorSignUpPage from './components/registerPages/AuthorSignUpPage';
import ConferenceSignUpPage from './components/registerPages/ConferenceSignUpPage';
import ReviewerSignUpPage from './components/registerPages/ReviewerSignUpPage';
import SystemAdminSignUpPage from './components/registerPages/SystemAdminSignUpPage';
import AccountSignUpConfirmationPage from './components/registerPages/AccountSignUpConfirmationPage';
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
import ReviewPaperPage1Conference from './components/conferencepages/ReviewPaperPage1';
import ReviewPaperPage2Conference from './components/conferencepages/ReviewPaperPage2';
import ReviewPaperPage3Conference from './components/conferencepages/ReviewPaperPage3';
import ReviewPaperPage4Conference from './components/conferencepages/ReviewPaperPage4';
import ViewPaperPage1Conference from './components/conferencepages/ViewPaperPage1';
import ViewPaperPage2Conference from './components/conferencepages/ViewPaperPage2';
import BidPaperPage1 from './components/reviewerpages/BidPaperPage1';
import BidPaperPage2 from './components/reviewerpages/BidPaperPage2';
import ReviewPaperPage1Reviewer from './components/reviewerpages/ReviewPaperPage1';
import ReviewPaperPage2Reviewer from './components/reviewerpages/ReviewPaperPage2';
import ReviewPaperPage3Reviewer from './components/reviewerpages/ReviewPaperPage3';
import ViewPaperPage1Reviewer from './components/reviewerpages/ViewPaperPage1';
import ViewPaperPage2Reviewer from './components/reviewerpages/ViewPaperPage2';

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
          <Route path="/authorsignup" element={<AuthorSignUpPage />} />
          <Route path="/conferencesignup" element={<ConferenceSignUpPage />} />
          <Route path="/systemadminsignup" element={<SystemAdminSignUpPage />} />
          <Route path="/reviewersignup" element={<ReviewerSignUpPage />} />
          <Route path="/signupconfirmation" element={<AccountSignUpConfirmationPage />} />
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
          <Route path="/reviewpaperpage1conference" element={<ReviewPaperPage1Conference />} />
          <Route path="/reviewpaperpage2conference" element={<ReviewPaperPage2Conference />} />
          <Route path="/reviewpaperpage3conference" element={<ReviewPaperPage3Conference />} />
          <Route path="/reviewpaperpage4conference" element={<ReviewPaperPage4Conference />} />
          <Route path="/viewpaperpage1conference" element={<ViewPaperPage1Conference />} />
          <Route path="/viewpaperpage2conference" element={<ViewPaperPage2Conference />} />
          <Route path="/bidpaperpage1" element={<BidPaperPage1 />} />
          <Route path="/bidpaperpage2" element={<BidPaperPage2 />} />
          <Route path="/reviewpaperpage1reviewer" element={<ReviewPaperPage1Reviewer />} />
          <Route path="/reviewpaperpage2reviewer" element={<ReviewPaperPage2Reviewer />} />
          <Route path="/reviewpaperpage3reviewer" element={<ReviewPaperPage3Reviewer />} />
          <Route path="/viewpaperpage1reviewer" element={<ViewPaperPage1Reviewer />} />
          <Route path="/viewpaperpage2reviewer" element={<ViewPaperPage2Reviewer />} />
       </Routes>
    </>
 );
};

export default App;