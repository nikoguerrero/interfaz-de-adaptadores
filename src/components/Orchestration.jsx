import React from 'react';
import './style.css'
const Orchestration = () => {
  return (
    <>
      <h2 className="h1 text-center">Orchestration</h2>
      <div className="row container-orchestration overflow-auto mt-2">
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="d-grid  col-sm-7  ">
              <button
                type="button"
                className="btn btn-secondary text-white  mt-3 "
              >
                Plugin Info
              </button>
              {/* <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button> */}
            </div>
            <div className="col-sm-1">
              <button className="btn   mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-x-circle-fill text-dark"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-grid  col-sm-7  ">
          <button className="btn btn-primary font-weight-bold"> Export </button>
        </div>
      </div>
    </>
  );
};

export default Orchestration;
