import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactConfetti from 'react-confetti';

function App() {
  const [nClicks, setNClicks] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClickableButton setNClicks={setNClicks} />
        <ReportClicks nClicks={nClicks} />
        <ReactConfetti />
      </header>
    </div>
  );
}

const ClickableButton: FC<{ setNClicks: React.Dispatch<React.SetStateAction<number>> }> = ({ setNClicks }) => (
  <button onClick={() => setNClicks(old => old + 1)}>{"Click me!"}</button>
);

const ReportClicks: FC<{nClicks: number}> = ({ nClicks }) => (
  <p>{`You have clicked the button ${nClicks} times!`}</p>
);

export default App;
