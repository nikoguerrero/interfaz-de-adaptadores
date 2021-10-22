import React, { Fragment } from 'react';
import AdapterConfig from './AdapterConfig';

const Adapter = (props) => {
  const { adapterArray } = props;

  console.log(adapterArray);
  return (
    <Fragment>
      <div>
        {adapterArray && adapterArray.map((item) => (
          <div className="main-info" key={item.mainClass}>
            <label>id:</label>
            <input type="text" defaultValue={item.id} />
            <label>dependencies:</label>
            <input type="text" defaultValue={item.dependencies} />
            <label>stepName:</label>
            <input type="text" defaultValue={item.stepName} />
            <label>mainClass:</label>
            <input type="text" readOnly value={item.mainClass} />
            <AdapterConfig
              key={item.id}
              config={item.config}
            />
          </div>
        ))}
      </div>
    </Fragment>
  )
};

export default Adapter;