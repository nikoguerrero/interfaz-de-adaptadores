import './App.css';
import React, { useState, useEffect } from 'react';
import Adapter from './components/Adapter';
import { load } from 'js-yaml';
import Main from './components/Main'
const App = () => {
  
  const [adapterArray, setAdapterArray] = useState([]);

  useEffect(() => {
    fetch('./data/config/evaluateConditions.yml')
      .then((response) => response.text())
      .then((yamlText) => {
        const yamlObject = load(yamlText);
        // console.log(yamlObject);
        setAdapterArray(yamlObject);
      }).catch((err) => console.log('failed to load yaml file', err)); 
  }, []);

  return (
    <div>
      <Adapter 
        adapterArray={adapterArray}
      />
     
      <Main/>
    </div>
  );
};

export default App;
