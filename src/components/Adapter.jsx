import React, { Fragment } from 'react';
import AdapterConfig from './AdapterConfig';
import { changePropertyValue } from '../helpers/helper.js';
import Dependencies from './Dependencies';
import './style.css';

const Adapter = (props) => {
  const {
    adapterArray,
    setAdapterArray,
    orchArray,
    setOrchArray,
    setAlert,
    dependeciesList,
    setDependenciesList,
    showBtn,
    setShowBtn,
  } = props;
  
const [error, setError] = React.useState(null);

  const saveAdapter = (adapterArray) => {
    const adapterId = adapterArray[0].id;
    const adapter = orchArray.find((adapter) => adapter.id === adapterId);
    const lengthDependencies = dependeciesList.length;
    if (!adapter) {
      const newOrchArray = [...orchArray, adapterArray[0]];
      setOrchArray(newOrchArray);
      setDependenciesList((prevDependeciesList) => {
        return [...prevDependeciesList, { value: String(lengthDependencies + 1), label: adapterArray[0].id }]
      });
      setAdapterArray([]);
      //falta esconder los botones
     
    }else if(orchArray === ('')){
        setError('lslssllslslslsls')
      }
        else {
      // alert('la ID del adaptador debe ser única');
      setAlert(true); 
    

    }
  };
  // const validation = (orchArray) =>{
  //   if(orchArray === ('')){
  //     setError('Falta llenar un campo')
  //   }
  // }
      
  const cancelAdapter = () => {
    setAdapterArray([]);
    setShowBtn(false);
  };

  const CancelOrSaveBtns = () => (
    <div className="row">
      <div className="float-end">
        <button type="button" className="btn btn-primary float-end" onClick={() => saveAdapter(adapterArray)}>
          Save
        </button>
        <button
          type="button"
          className="btn my-primary float-end me-3" onClick={cancelAdapter}>
          Cancel
        </button>
      </div>
    </div>
  );

  // console.log(orchArray);

  return (
    <Fragment>
      {adapterArray && adapterArray.map((item) => (
        <div key={item.mainClass}>
          <h2 className="h2 text-center mt-4">{item.id}</h2>
          <h5 className="my-primary fw-bold">Plugin Configuration</h5>
          <div className="row g-2">
            <div className="col-sm-5">
              <div className="form-floating mb-3 ">
                <input type="text" className="form-control" defaultValue={item.id} onChange={(e) => changePropertyValue(item, 'id', e.target.value)
                } />
                <label>ID</label>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-floating mb-3">
                <Dependencies dependeciesList={dependeciesList} />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" defaultValue={item.stepName} onChange={(e) => changePropertyValue(item, 'stepName', e.target.value)} />
                <label>StepName</label>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" readOnly value={item.mainClass} onChange={(e) => changePropertyValue(item, 'mainClass', e.target.value)} />
                <label>MainClass</label>
              </div>
            </div>
          </div>
          <h5 className="my-primary fw-bold">Config</h5>
          <AdapterConfig
            key={item.id}
            config={item.config}
          />
        </div>
      
      ))}
      {error && <div className="alert alert-danger">{error}</div>}
      {showBtn ? <CancelOrSaveBtns /> : null}
    </Fragment>
  )
};

export default Adapter;