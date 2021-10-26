import React from 'react';
import Main from './components/Main';
const App = () => {
  const orchArrayJson = localStorage.getItem('orchestration');
  let containsLocalOrch = false;
  let orchArray = [];
  if (orchArrayJson) {
    orchArray = JSON.parse(orchArrayJson);
    containsLocalOrch = orchArray.length > 0;
  }

  return (
    <div>
      <Main initialOrchArray={orchArray} containsLocalOrch={containsLocalOrch}/>
    </div>
  );
};

export default App;
