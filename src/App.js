import logo from './logo.svg';
import './App.css';
// const yaml = require('js-yaml');
// const fs   = require('fs');

import { load } from 'js-yaml'
import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  // const [output, setOutput] = useState('');

  useEffect(() => {
    fetch('./data/config/keyFinder.yml')
      .then((response) => response.text())
      .then((yamlText) => {
        const yamlObject = load(yamlText);
        console.log(yamlObject);
        setText(JSON.stringify(yamlObject));
      }).catch((err) => console.log('failed to load yaml file', err)); 
  }, []);

  return (
    <div style={{width: '100%'}}>
      {text}
    </div>
  );
}

export default App;
