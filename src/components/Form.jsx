import React from 'react';
import dumb from '../assets/basurero-5.png';
import more from '../assets/fab.png';
import './style.css';

const Form = ({adapter}) => {
  const {id, mainClass,stepName, dependencies} = adapter

  return (
    <div>
      <h2 className="h1 text-center">Output Handler</h2>
      <h5 className="text-primary">Plugin Configuration</h5>
      <div className="row g-2">
        <div className="col-sm-5">
          <div className="form-floating mb-3 ">
            <input type="text" className="form-control" defaultValue={id} />
            <label>ID</label>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" defaultValue={dependencies}/>
            <label>Dependencies</label>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" defaultValue={stepName} />
            <label>StepName</label>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" defaultValue={mainClass} />
            <label>MainClass</label>
          </div>
        </div>
      </div>
      <h5 className="text-primary">Config</h5>
      <div className="row g-2">
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input type="text" className="form-control"/>
            <label>RecordClass</label>
          </div>
        </div>
      </div>
      <h5 className="text-primary">Fields</h5>
      <div className="row g-2">
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" />
            <label>Map</label>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" />
            <label>Length</label>
          </div>
        </div>
        <div className="col-sm-1">
            <img src={dumb} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row g-2">
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" />
            <label>Map</label>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" />
            <label>Length</label>
          </div>
        </div>
        <div className="col-sm-1">
            <img src={more} alt="" className="" />
        </div>
      </div>
      <div className="row">
        <div className="float-end">
          <button type="button" className="btn btn-primary float-end">
            Save
          </button>
          <button
            type="button"
            className="btn btn-outline-primary float-end me-3"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
