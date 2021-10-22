import React, { Fragment } from 'react';

const AdapterProperty = (props) => {
  const { object, objectKey, objectValue } = props;
  const prefix = Array.isArray(object) ? '' : objectKey + '=';
  if (typeof objectValue === 'object') {
    return <Fragment>
      {prefix}
      <AdapterConfig key={objectKey} config={objectValue}/>
    </Fragment>
  } else {
    return <Fragment>
        {prefix}
        <input type="text" defaultValue={objectValue}/>
      </Fragment>
  }
};

const AdapterConfig = ({ config }) => {
  console.log(config);
  const propertyName = Object.keys(config);
  return (
    <Fragment>
      {propertyName.map((element) => 
      <AdapterProperty key={propertyName} object={config} objectKey={propertyName} objectValue={config[element]}/>
      )}
    </Fragment>
  )
};

export default AdapterConfig;