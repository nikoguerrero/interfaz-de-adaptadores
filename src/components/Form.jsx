import React from 'react';

const Form = () => {
  return (
    <div>
      <h2 className="h1 text-center">Form</h2>
      <div className="row g-3">
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
        </div>
        <div className="col-sm">
          <div className="form-outline">
            <input type="text" id="form10Example3" className="form-control" />
            <label className="form-label" for="form10Example3">Name</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
