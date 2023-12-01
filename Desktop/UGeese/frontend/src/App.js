import React, {useState, useEffect, useContext } from 'react';

import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import SigninForm from './auth/forms/signin';
import SignUpForm from './auth/forms/signup';

import Sidebar from './shared/sidebar';
import SettingsPage from './shared/SettingsPage';
import StorePage from './shared/StorePage';

import Button from './components/Button';
import CountdownAnimation from './components/CountdownAnimation'; // Adjust the import path
import SetPomodoro from './components/SetPomodoro'; // Adjust the import path
import { SettingsContext } from './context/settingsContext';


const Home = () => {

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)

    useEffect(() => {
        updateExecute(executing);
      }, [executing, startAnimate, updateExecute]);
      
      return (
        <div className="container flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl mb-1 mt-8">UGeese</h1>
          <small>Be productive the right way.</small>
          {pomodoro !== 0 ? (
            <>
              <ul className="labels flex bg-white rounded-full p-2 mt-4 space-x-4">
                <li>
                  <Button
                    title="Work"
                    activeClass={
                      executing.active === 'work' ? 'active-label' : undefined
                    }
                    _callback={() => setCurrentTimer('work')}
                  />
                </li>
              </ul>
              <Button title="Settings" _callback={SettingsBtn} />
              <div className="timer-container flex items-center justify-center flex-2 mt-8">
                <div className="time-wrapper flex items-center justify-center h-80 w-80 rounded-full bg-white text-black text-5xl shadow-xl">
                  <CountdownAnimation
                    key={pomodoro}
                    timer={pomodoro}
                    animate={startAnimate}
                  >
                    {children}
                  </CountdownAnimation>
                </div>
              </div>
              <div className="button-wrapper flex items-center justify-center p-8 space-x-4">
                <Button
                  title="Start"
                  activeClass={!startAnimate ? 'active' : undefined}
                  _callback={startTimer}
                />
                <Button
                  title="Pause"
                  activeClass={startAnimate ? 'active' : undefined}
                  _callback={pauseTimer}
                />
              </div>
            </>
          ) : (
            <SetPomodoro />
          )}
        </div>
      );      
    };
  
    // Assuming SigninForm and SignUpForm are similar components
const AuthForm = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {children}
    </div>
  );
};

// Your App component remains mostly unchanged
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [authState, setAuthState] = useState(''); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openSettings = () => {
    setSettingsOpen(true);
  };

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  const location = useLocation();
  const isAuthRoute =
    location.pathname === '/sign-in' || location.pathname === '/sign-up';

    const [user, setUser] = useState(null);
  
    const handleLogin = () => {
    setAuthState('login');
    navigate('/sign-in');
  };


  return (
    <div>
      <div className={`flex ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {!isAuthRoute && (
          <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} openSettings={openSettings} />
        )}

        <div className="main-content flex-1">
          <Routes>
            <Route
              path="/sign-in"
              element={<AuthForm><SigninForm setUser={setUser} setAuthState={setAuthState} /></AuthForm>}
            />
            <Route
              path="/sign-up"
              element={<AuthForm><SignUpForm setUser={setUser} setAuthState={setAuthState} /></AuthForm>}
            />
            <Route
              path="/home"
              element={<Home openSettings={openSettings} />}
            />
            <Route
              path="/settings"
              element={
                isSettingsOpen ? (
                  <SettingsPage closeSettings={closeSettings} />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />
            <Route path="/store" element={<StorePage />} />
          </Routes>
        </div>
      </div>
      {!isAuthRoute && (
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>Already have an account?</p>
          <button
            onClick={handleLogin}
            className='ml-2 font-medium text-base text-blue-500'
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
