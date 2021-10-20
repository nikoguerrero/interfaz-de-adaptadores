import logo from './logo.svg';
import './App.css';
// const yaml = require('js-yaml');
// const fs   = require('fs');

import { load } from 'js-yaml'
import { fs } from 'fs';
import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');
  useEffect(() => {
    const value = localStorage.getItem('text');
    setText(value);
    log({target: {value: text}});
  }, []);
  const log = ({ target: {value: text}}) => Promise.resolve(text)
    .then(load)
    .then( t => JSON.stringify(t, null, 2))
    .then(setOutput)
    .then(() => localStorage.setItem('text', text));

  return (
    <div>
      <textarea
        rows="20"
        onChange={log}
        defaultValue={text}
        style={{width: '100%'}}>
      </textarea>
      <pre>
        <code>
          {output}
        </code>
      </pre>
    </div>
  );
}

export default App;
