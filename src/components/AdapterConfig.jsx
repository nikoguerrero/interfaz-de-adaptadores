import React, {Fragment} from 'react';
import changePropertyValue from '../helpers/helper.js';

const firstToUpper = (str) => {
  return str[0].toUpperCase() + str.substr(1);
};

const AdapterPropertyList = ({propertyList}) => {
  const keys = Object.keys(propertyList);
  return (
    <div className="row g-2 ">
      {keys.map((key, index) => 
       typeof propertyList[key] !== 'object' ? 
        <div className="col-sm-4" key={index}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" defaultValue={propertyList[key]} onChange={(e) => changePropertyValue(propertyList, key, e.target.value)}/>
            <label>{firstToUpper(key)}</label>
          </div>
        </div> : 
          <div key={index}>
            <h6 className="text-primary">{firstToUpper(key)}</h6>
            <AdapterPropertyList propertyList={propertyList[key]} />
          </div>
      )}
      <div className="col-sm-1">
      <button className="btn btn-ligth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="40"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
      </div>
    </div>
  )
};

const AdapterProperty = (props) => {
  const { object, objectKey, objectValue } = props;
  const isArray =  Array.isArray(object);
  const prefix = isArray ? '' : firstToUpper(objectKey) + ':';
  if (Array.isArray(objectValue)) {
    return (
      <Fragment>
        <h5 className="text-primary">{prefix}</h5>
        {objectValue.map((item, index) => 
          <AdapterPropertyList key={index} propertyList={item} />
        )}
      </Fragment>
    );
  } else if (typeof objectValue === 'object') {
    return <div>
      <h5 className="text-primary">{prefix}</h5>
      <AdapterConfigWrapper key={objectKey} config={objectValue} />
    </div>
  } else {
    return (
    <div className="row g-2">
      <div className="col-sm-5">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" defaultValue={objectValue} onChange={(e) => changePropertyValue(object, objectKey, e.target.value)}/>
          <label>{firstToUpper(objectKey)}</label>
        </div>
      </div>
    </div>
    )
  }
};

const AdapterConfigWrapper = ({ config }) => {
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
}

const AdapterConfig = ({config}) => {
  
  return (
    <Fragment>
      <AdapterConfigWrapper
        config={config}
      />
      <div className="col-sm-1">
      <button className="btn btn-ligth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="40"
              fill="currentColor "
              className="bi bi-plus-circle-fill  text-primary "
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </button>
      </div>
    </Fragment>
  )
};

export default AdapterConfig;