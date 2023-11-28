import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/settingsContext';

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 0.2,
        short: 0.1,
        long: 0.5,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = (input) => {
        const { name, value } = input.target;
      
        // Check if the value is a valid integer before updating the state
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue)) {
          switch (name) {
            case 'work':
              setNewTimer({
                ...newTimer,
                work: parsedValue,
              });
              break;
            case 'shortBreak':
              setNewTimer({
                ...newTimer,
                short: parsedValue,
              });
              break;
            case 'longBreak':
              setNewTimer({
                ...newTimer,
                long: parsedValue,
              });
              break;
            default:
              break;
          }
        }
      };
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <button type='submit'>Set Timer</button>
            </form>
        </div>
    )
}

export default SetPomodoro