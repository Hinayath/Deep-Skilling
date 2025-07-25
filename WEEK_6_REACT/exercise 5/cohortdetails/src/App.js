import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>MyAcademy Cohorts</h1>
      <CohortDetails
        name="React Bootcamp"
        status="ongoing"
        startDate="2025-07-01"
        endDate="2025-08-15"
      />
      <CohortDetails
        name="Node.js Bootcamp"
        status="completed"
        startDate="2025-05-01"
        endDate="2025-06-15"
      />
    </div>
  );
}

export default App;

