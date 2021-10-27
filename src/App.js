import React from 'react';
import Main from './components/Main';
const App = () => {
  const orchArrayJson = localStorage.getItem('orchestration');
  let orchArray = [];
  if (orchArrayJson) {
    orchArray = JSON.parse(orchArrayJson);
  }

  return (
    <div>
      <Main initialOrchArray={orchArray} />
    </div>
  );
};

export default App;
