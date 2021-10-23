import React from 'react';

const changePropertyValue = (object, objectKey, newValue) => {
  console.log(object);
  if (typeof object[objectKey] === 'number') {
    object[objectKey] = Number(newValue);
  } else {
    object[objectKey] = newValue;
  }
};

const AdapterProperty = (props) => {
  const { object, objectKey, objectValue } = props;
  const prefix = Array.isArray(object) ? '' : objectKey + ':';
  if (typeof objectValue === 'object') {

    // el style es temporal, solo para que no quede tan caótico en pantalla
    return <div style={{ paddingLeft: 20 + 'px' }}>
      {prefix}
      <AdapterConfig key={objectKey} config={objectValue} />
    </div>
  } else {
    return <div>
      {prefix}
      <input type="text" defaultValue={objectValue} onChange={(e) => changePropertyValue(object, objectKey, e.target.value)} />
    </div>
  }
};

const AdapterConfig = ({ config }) => {
  const configArray = Object.keys(config);

  return (
    <div>
      {configArray.map((element) =>
        <AdapterProperty
          key={element}
          object={config}
          objectKey={element}
          objectValue={config[element]} />
      )}
    </div>
  )
};

export default AdapterConfig;