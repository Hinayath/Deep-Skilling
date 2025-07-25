import React, { useState } from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [total, setTotal] = useState('');
  const [goal, setGoal] = useState('');
  const [average, setAverage] = useState(null);

  const handleCalculate = () => {
    if (goal && total) {
      const avg = parseFloat(total) / parseFloat(goal);
      setAverage(avg.toFixed(2));
    }
  };

  return (
    <div className="score-container">
      <h2>Student Score Calculator</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="School" onChange={(e) => setSchool(e.target.value)} />
      <input type="number" placeholder="Total Score" onChange={(e) => setTotal(e.target.value)} />
      <input type="number" placeholder="Goal" onChange={(e) => setGoal(e.target.value)} />
      <button onClick={handleCalculate}>Calculate Average</button>
      {average && (
        <div className="result">
          <p>Name: {name}</p>
          <p>School: {school}</p>
          <p>Average Score: {average}</p>
        </div>
      )}
    </div>
  );
}

export default CalculateScore;
