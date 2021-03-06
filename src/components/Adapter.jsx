import React, { Fragment } from 'react';
import AdapterConfig from './AdapterConfig';
import { changePropertyValue } from '../helpers/helper.js';
import Dependencies from './Dependencies';
import '../css/style.css';

const Adapter = (props) => {
  const {
    adapterName,
    adapterArray,
    setAdapterArray,
    orchArray,
    setOrchArray,
    setAlert,
    dependenciesList,
    setDependenciesList,
    showBtn,
    setShowBtn,
    setModal
  } = props;

  const saveAdapter = (adapterArray) => {
    const adapterId = adapterArray[0].id;
    if (adapterId.length > 0) {
      const adapter = orchArray.find((adapter) => adapter.id === adapterId);
      const lengthDependencies = dependenciesList.length;
      if (!adapter) {
        const newOrchArray = [...orchArray, adapterArray[0]];
        setOrchArray(newOrchArray);
        setDependenciesList((prevDependeciesList) => {
          return [...prevDependeciesList, { value: String(lengthDependencies), label: adapterArray[0].id }]
        });
        setAdapterArray([]);
        setShowBtn(false);
      } else {
        setAlert(true);
      }
    } else {
      setModal(true);
    }
  };

  const cancelAdapter = () => {
    setAdapterArray([]);
    setShowBtn(false);
  };

  const CancelOrSaveBtns = () => (
    <div className="row justify-content-end">
      <div className="float-end">
        <button
          type="button"
          className="btn btn-primary save-btn float-end me-3"
          onClick={() => saveAdapter(adapterArray)}
        >
          Save
        </button>
        <button
          type="button"
          className="btn my-primary float-end me-3"
          onClick={cancelAdapter}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <Fragment>
      {adapterArray && adapterArray.map((item) => (
        <div key={item.mainClass}>
          <h3 className="h3 text-center mt-4">{adapterName}</h3>
          <h5 className="my-primary fw-bold">Plugin Configuration</h5>
          <div className="row g-2">
            <div className="col-sm-5">
              <div className="form-floating mb-3 ">
                <input type="text" className="form-control" defaultValue={item.id} onChange={(e) => changePropertyValue(item, 'id', e.target.value)} />
                <label>ID</label>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-floating mb-3">
                <Dependencies dependenciesList={dependenciesList} adapter={item}/>
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
      {showBtn ? <CancelOrSaveBtns /> : null}
    </Fragment>
  )
};

export default Adapter;