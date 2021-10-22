import React, { Fragment } from 'react';
import adapters from './data/adapters';

const AdapterList = () => {
  return (
    <Fragment>
      <ul>
        {
          adapters.map((item) => (
            <li>{item.name}</li>
          ))
        }
      </ul>
    </Fragment>
  )
};

export default AdapterList;