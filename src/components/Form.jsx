import React from 'react'

const Form = () => {
  return (
    <div>
      <h2 className="h1 text-center">Output Handlergit</h2>
      <h5 className="text-primary">Plugin Configuration</h5>
      <div className="row g-2">
        <div className="col-sm-5">
          <div className="form-floating mb-3 ">
            <input
              type="text"
              className="form-control"
            />
            <label>ID</label>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
            />
            <label>Dependencies</label>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
            />
            <label>StepName</label>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
            />
            <label>MainClass</label>
          </div>
        </div>
      </div>
      <h5 className="text-primary">Config</h5>
        <div className="row g-2">
          <div className="col-sm-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
              />
              <label>RecordClass</label>
            </div>
          </div>
        </div>
        <h5 className="text-primary">Fields</h5>
        <div className="row g-2">
          <div className="col-sm-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
              />
              <label>Map</label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
              />
              <label>Lenght</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="float-end">
            <button type="button" className="btn btn-primary float-end">Save </button>
            <button type="button" className="btn btn-outline-primary float-end me-3" >Cancel </button>
          </div>
        </div>
    </div>
  );
};

export default Form
