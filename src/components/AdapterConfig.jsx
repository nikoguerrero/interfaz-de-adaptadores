import React, {Fragment} from 'react';
import deleteImg from '../assets/basurero-5.png';
import more from '../assets/fab.png';

const firstToUpper = (str) => {
  return str[0].toUpperCase() + str.substr(1);
};

const AdapterPropertyList = ({propertyList}) => {
  const keys = Object.keys(propertyList);
  return (
    <div className="row g-2">
      {keys.map((key, index) => 
       typeof propertyList[key] !== 'object' ? 
        <div className="col-sm-5" key={index}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" />
            <label>{firstToUpper(key)}</label>
          </div>
        </div> : 
          <div key={index}>
            <h6 className="text-primary">{firstToUpper(key)}</h6>
            {/* <AdapterConfig config={propertyList[key]} /> */}
            <AdapterPropertyList propertyList={propertyList[key]} />
          </div>
      )}
      <div className="col-sm-1">
        <img src={deleteImg} alt="" className="img-fluid" />
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
    // return <div>
    //   {prefix}
    //   <input type="text" defaultValue={objectValue} onChange={(e) => changePropertyValue(object, objectKey, e.target.value)} />
    // </div>
    return (
    <div className="row g-2">
      <div className="col-sm-5">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" defaultValue={objectValue}/>
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

const AdapterConfig = ({ config }) => {
  
  return (
    <Fragment>
      <AdapterConfigWrapper config={config} />
      <div className="col-sm-1">
        <img src={more} alt="" className="" />
      </div>
    </Fragment>
  )
};

export default AdapterConfig;