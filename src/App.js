
import { useState } from 'react';
import './App.css';
import Clock from './Clock';
// import Timer from './Timer';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>Time Is precious</h1>
      <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} /> Show
      {show ? <Clock /> : null}   {/* conditional rendaring */}
      {/* <Timer /> */}

    </div>
  );
}

export default App;
