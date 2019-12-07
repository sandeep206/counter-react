import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import ResetButton from './components/ResetButton';
import './index.css';

function App() {
  let [count, setCount] = useState(0);

  const resetCounter = () => {
    count = 0;
    // setCount(count = 0);
  }
  const incrementCount = increment => {
    setCount(count + increment);
  }

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount}/>
      <Button increment={10} onClickFunction={incrementCount}/>
      <Button increment={100} onClickFunction={incrementCount}/>
      <Button increment={1000} onClickFunction={incrementCount}/>
      <ResetButton onClickFunction={resetCounter} />
  <span>{count}</span>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

 