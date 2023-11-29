import React, { useContext, useState } from 'react';
import { SettingsContext } from '../context/settingsContext';

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: { hours: 0, minutes: 20 }, // Initial value set to 20 minutes
    active: 'work',
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;

    // Check if the value is a valid integer before updating the state
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      const timeUnit = name.endsWith('hours') ? 'hours' : 'minutes';

      setNewTimer({
        ...newTimer,
        work: {
          ...newTimer.work,
          [timeUnit]: parsedValue,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>
            Work Time:
            <input
              className="input"
              type="number"
              name="work.hours"
              onChange={handleChange}
              value={newTimer.work.hours}
            />
            hours
            <input
              className="input"
              type="number"
              name="work.minutes"
              onChange={handleChange}
              value={newTimer.work.minutes}
            />
            minutes
          </label>
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default SetPomodoro;
