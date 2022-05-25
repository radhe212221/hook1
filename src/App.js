import React, { useState } from 'react';
import './style.css';
//use state
export default function App() {
  const [s, sets] = useState(0);
  return (
    <div>
      <h1>s: {s}</h1>
      <button onClick={() => sets(s + 1)}>+</button>
      <button onClick={() => sets(s - 1)}>-</button>
      <button onClick={() => sets(0)}>0</button>
    </div>
  );
}
