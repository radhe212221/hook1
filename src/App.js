import React, { useState } from 'react';
import './style.css';
//use state
export default function App() {
  const [topics, settopics] = useState([]);

  const addtopic = () => {
    const mytopic = prompt('enter topic name ', 'html topic');
    settopics([...topics, mytopic]);
  };
  return (
    <div>
      <button onClick={addtopic}>add topics </button>
      <h1>All topics : {topics?.length}</h1>
      {topics?.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}
