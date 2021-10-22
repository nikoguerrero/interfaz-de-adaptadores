import React from 'react';

const Form = () => {
  return (
    <div>
      <h2 className="h1 text-center">Form</h2>
      <h5 className="text-primary">Plugin Configuration</h5>
      <div className="row g-2">
        <div className="col-sm-5">
          <div className="form-floating mb-3 ">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
        </div>
      </div>
      <h5 className="text-primary">Config</h5>
      <div className="row g-2">
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
        </div>
      </div>
      <h5 className="text-primary">Fields</h5>
      <div className="row g-2">
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
