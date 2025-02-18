import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState('');

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleDecrement() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function appendValue(value) {
    setDisplay(display + value);
  }

  function clearDisplay() {
    setDisplay('');
  }

  function calculateResult() {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      alert("Invalid Input");
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Counter: {count}</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <h2>Calculator</h2>
      <div style={{ width: '200px', textAlign: 'center', border: '2px solid black', padding: '10px', borderRadius: '10px' }}>
        <input type="text" value={display} disabled style={{ width: '100%', height: '40px', fontSize: '1.5em', textAlign: 'right', marginBottom: '10px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
          <button onClick={() => clearDisplay()}>C</button>
          <button onClick={() => appendValue('/')}>/</button>
          <button onClick={() => appendValue('*')}>*</button>
          <button onClick={() => appendValue('-')}>-</button>
          <button onClick={() => appendValue('7')}>7</button>
          <button onClick={() => appendValue('8')}>8</button>
          <button onClick={() => appendValue('9')}>9</button>
          <button onClick={() => appendValue('+')}>+</button>
          <button onClick={() => appendValue('4')}>4</button>
          <button onClick={() => appendValue('5')}>5</button>
          <button onClick={() => appendValue('6')}>6</button>
          <button onClick={() => calculateResult()}>=</button>
          <button onClick={() => appendValue('1')}>1</button>
          <button onClick={() => appendValue('2')}>2</button>
          <button onClick={() => appendValue('3')}>3</button>
          <button onClick={() => appendValue('0')} style={{ gridColumn: 'span 2' }}>0</button>
          <button onClick={() => appendValue('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;