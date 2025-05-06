import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  // Function to handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to handle evaluation
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle clear
  const handleClear = () => {
    setInput('');
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  // Function to handle square root
  const handleSquareRoot = () => {
    try {
      setInput(Math.sqrt(eval(input)).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle exponentiation
  const handleExponentiation = () => {
    try {
      setInput(Math.pow(eval(input), 2).toString()); // Square the current value
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      
      <h1>Advanced Calculator</h1>
<hr style={{ width: '60%', margin: '20px auto', borderColor: '#00ffae' }} />

      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={handleBackspace}>←</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('.')}>.</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleEvaluate}>=</button>
          <button onClick={handleSquareRoot}>√</button>
          <button onClick={handleExponentiation}>x²</button>
        </div>
      </div>
    </div>
  );
}

export default App;
