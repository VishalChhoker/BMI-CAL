import './App.css';
import React, { useState } from 'react';

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('please enter a valid height and weight')
    }
    else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1))

      if (bmi < 25) {
        setMessage('you are underweight');
      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage('you are healthy weight')
      }
      else {
        setMessage('you are overweight')
      }
    }
  }

  let reload = () => {
    window.location.reload();
  }
  return (
    <div className="App">

      <div className="container">
        <h2>BMI CALCUATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs) </label>
            <input type="text" placeholder="Enter weigth value" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (inch) </label>
            <input type="text" placeholder="Enter Height value" value={height} onChange={(e => setHeight(e.target.value))} />
          </div>
          <div>
            <button className='btn' type="submit">Submit</button>
            <button className='btn-btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='cenetr'>
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
