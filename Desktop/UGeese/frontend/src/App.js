import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninForm from './auth/forms/signin';
import SignUpForm from './auth/forms/signup';
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
    <div className="container">
      <h1>UGeese</h1>
      <small>Be productive the right way.</small>
      {pomodoro !== 0 ?
      <>
        <ul className="labels">
          <li>
            <Button 
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Short Break" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <Button 
              title="Long Break" 
              activeClass={executing.active === 'long' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('long')} 
            />
          </li>
        </ul>
        <Button title="Settings" _callback={SettingsBtn} />
        <div className="timer-container">
          <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
        </div>
      </> : <SetPomodoro />}
    </div>
  )
}


function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Routes>
        {/* Public routes are login and sign up */}
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />

        {/* Private routes are what we see after sign in */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
