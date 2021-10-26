import React, { Fragment } from 'react';
import AdapterConfig from './AdapterConfig';
import changePropertyValue from '../helpers/helper.js';
import Dependencies from './Dependencies';
import './style.css';

const Adapter = (props) => {

  const { adapterArray, setAdapterArray, show, orchArray, setOrchArray, setAlert, dependeciesList, setDependenciesList } = props;


  const saveAdapter = (adapterArray) => {
    const newOrchArray = [...orchArray, adapterArray[0]];
    setOrchArray(newOrchArray);

    const lengthDependencies = dependeciesList.length;

    setDependenciesList((prevDependeciesList) => {
      return [...prevDependeciesList, { value: String(lengthDependencies), label: adapterArray[0].id }]
    });
  }



  const submitAdapter = (adapterArray) => {
    const adapterId = adapterArray[0].id;
    const adapter = orchArray.find((adapter) => adapter.id === adapterId);
    if (!adapter) {
      const newOrchArray = [...orchArray, adapterArray[0]];
      setOrchArray(newOrchArray);

      const lengthDependencies = dependeciesList.length;

      setDependenciesList((prevDependeciesList) => {
        return [...prevDependeciesList, { value: String(lengthDependencies), label: adapterArray[0].id }]
      });


      setAdapterArray([]);
      //falta esconder los botones
    } else {
      alert('la ID del adaptador debe ser única');
      setAlert(true);
    }
  };

  const cancelOrchestration = () => {
    window.location.reload();
    localStorage.clear();
  };

  const CancelOrSaveBtns = () => (
    <div className="row">
      <div className="float-end">
        <button type="button" className="btn btn-primary float-end" onClick={() => submitAdapter(adapterArray)}>
          Save
        </button>
        <button
          type="button"
          className="btn my-primary float-end me-3">
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
          <h2 className="h1 text-center mt-4">{item.id}</h2>
          <h5 className="my-primary">Plugin Configuration</h5>
          <div className="row g-2">
            <div className="col-sm-5">
              <div className="form-floating mb-3 ">
                <input type="text" className="form-control" defaultValue={item.id} onChange={(e) => changePropertyValue(item, 'id', e.target.value)} />
                <label>ID</label>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-floating mb-3">
                {/* <input type="text" className="form-control" defaultValue={item.dependencies} onChange={(e) => changePropertyValue(item, 'dependencies', e.target.value)}/> */}
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
          <h5 className="my-primary">Config</h5>
          <AdapterConfig
            key={item.id}
            config={item.config}
          />
        </div>
      ))}
      {show ? <CancelOrSaveBtns /> : null}
    </Fragment>
  )
};

export default Adapter;