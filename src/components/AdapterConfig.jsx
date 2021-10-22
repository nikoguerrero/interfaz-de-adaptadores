import React, { Fragment } from 'react';

const changePropertyValue = (object, objectKey, newValue) => {
  object[objectKey] = newValue;
}

const AdapterProperty = (props) => {
  const { object, objectKey, objectValue } = props;
  const prefix = Array.isArray(object) ? '' : objectKey + ':';
  if (typeof objectValue === 'object') {
    // el style es temporal, solo para que no quede tan caótico en pantalla
    return <div style={{paddingLeft: 20 +'px'}}>
      {prefix}
      <AdapterConfig key={objectKey} config={objectValue}/>
    </div>
  } else {
    return <div>
        {prefix}
        <input type="text" defaultValue={objectValue}/>
      </div>
  }
};

const AdapterConfig = ({ config }) => {
  console.log(config);
  const configArray = Object.keys(config);
  return (
    <div>
      {configArray.map((element) => 
      <AdapterProperty
        key={element}
        object={config} 
        objectKey={element} 
        objectValue={config[element]}/>
      )}
    </div>
  )
};

export default AdapterConfig;