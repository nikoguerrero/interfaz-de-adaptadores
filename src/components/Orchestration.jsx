import React, { Fragment } from 'react';
import './style.css'

// Paso 7 : Se recibe desde el componente 'Main' la propiedad adapterIDList
const Orchestration = ({ adapterIDList }) => {
  return (
    <>
      <h2 className="h1 text-center mt-4">Orchestration</h2>
      <div className="row  container-orchestration overflow-auto mt-2">
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="d-grid  col-sm-7   ">
              {/* <button
                type="button"
                className="btn btn-secondary text-white  mt-3 "
              >
                Plugin Info
              </button> */}
              {
                // Paso 8: Con la propiedad enviada por el componente padre 'Main, 
                // iteramos y mostramos los ID de los adaptadores de la orquestacion
                adapterIDList.map((adapter) => (
                  <Fragment>
                    <button type="button" className="btn btn-secondary text-white  mt-3 "> {adapter}</button>
                  </Fragment>

                ))
              }
              {/* <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
          <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>
            <button type="button" className="btn btn-secondary text-white  mt-3 "> Plugin Info</button>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="d-grid  col-sm-5  ">
          <button className="btn btn-primary font-weight-bold"> Export </button>
        </div>
      </div>




    </>
  );
};

export default Orchestration;
