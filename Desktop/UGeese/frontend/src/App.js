import React, {useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninForm from './auth/forms/signin';
import SignUpForm from './auth/forms/signup';
import Sidebar from './shared/sidebar';

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
  
    function App() {
      const [isSidebarOpen, setSidebarOpen] = useState(false);
    
      const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
    
      return (
        <div>
          <div className={`flex ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            {/* Render the Sidebar component with the toggleSidebar function */}
            <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    
            <div className="main-content items-center justify-center h-screen flex-1">
              <Routes>
                {/* Public routes are login and sign up */}
                <Route path="/sign-in" element={<SigninForm />} />
                <Route path="/sign-up" element={<SignUpForm />} />
    
                {/* Private routes are what we see after sign in */}
                <Route path="/home" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      );
    }
    
    export default App;