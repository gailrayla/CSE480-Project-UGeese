// CountdownAnimation.js
import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/settingsContext';

const CountdownAnimation = ({ timer, animate, children, sessionId }) => {
  const { stopAnimate, handleEndSession } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      isPlaying={animate}
      duration={timer * 60}
      colors={['#FE6F6B', 0.33]}
      strokeWidth={8}
      size={320}
      trailColor="FEF0AE"
      onComplete={() => {
        stopAnimate();
        handleEndSession(sessionId); // Call handleEndSession when the countdown completes
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
