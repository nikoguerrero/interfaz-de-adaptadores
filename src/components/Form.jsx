import React from 'react';
import Dependecies from './Dependecies';
import './style.css';

const Form = ({adapter}) => {
  const {id, mainClass, stepName} = adapter;

  return (
    <div>
      <h2 className="h1 text-center ">Output Handler</h2>
      <h5 className="text-primary">Plugin Configuration</h5>
      <div className="row g-2">
        <div className="col-sm-5">
          <div className="form-floating mb-3 ">
            <input type="text" className="form-control" defaultValue={id} />
            <label>ID</label>
          </div>
        </div>
        <div className="col-sm-5">
          <Dependecies />
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
      </div>
      <div className="row mt-3">
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
