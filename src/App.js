import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Ragister from './pages/Ragister';
import ForgotPassword from './pages/ForgotPassword';
import Notification from './pages/Notification';
import About from './pages/About';
import Account from './pages/Account';
import Analatics from './pages/Analatics';
import Review from './pages/Review';
import ReviewPost from './pages/ReviewPost';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';
import Darkmode from './pages/section/Darkmode';


function App() {

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticate);
  const isDarkMode = useSelector((state) => state.darkmode.isDarkmode);

  const theme = {
    color: {
      lightBlueBg: '#F0F8FF',
      lightBlueBg2: '#DDE9FD',
      blackBg: '#000',
      whiteBg: '#fff',
      yellowBg: '#fadb14',
      blueBg: '#4F86D9',
      lightBg: '#f5f5f5',
      lightBg2: 'rgb(0 0 0 / 6%)',
      grayBg: 'rgba(0, 0, 0, 0.5)',

      whiteText: '#fff',
      blackText: '#000',
      blueText: '#4F86D9',
      grayText: '#626262',
      yellowText: '#fadb14',
      redText: '#f00',

      grayBorder: '#555555',
      blueBorder: '#4F86D9',

      lightShadow: '#00000017',

    },
    media: { mobile: '768px', tab: '998px' }
  }

  const theme2 = {
    color: {
      lightBlueBg: '#020d17',
      lightBlueBg2: '##0a1a33',
      blackBg: '#fff',
      whiteBg: '#000',
      yellowBg: '#fadb14',
      blueBg: '#4F86D9',
      lightBg: '#1c1c1c',
      lightBg2: '#333333',
      grayBg: 'rgba(0, 0, 0, 0.5)',

      whiteText: '#000',
      blackText: '#fff',
      blueText: '#4F86D9',
      grayText: '#a8a8a8',
      yellowText: '#fadb14',
      redText: '#f00',

      grayBorder: '#626262',
      blueBorder: '#4F86D9',

      lightShadow: '#ffffff17',

    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode ? theme2 : theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Darkmode />
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Account" element={<Account />} />
                <Route path="/Analatics" element={<Analatics />} />
                <Route path="/Notification" element={<Notification />} />
                <Route path="/Review" element={<Review />} />
                <Route path="/Reviewpost" element={<ReviewPost />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </>
            ) :
              (
                <>
                  <Route path="/Ragister" element={<Ragister />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/ForgotPassword" element={<ForgotPassword />} />
                  <Route path="/*" element={<Navigate to="/Login" />} />
                </>
              )}



          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
