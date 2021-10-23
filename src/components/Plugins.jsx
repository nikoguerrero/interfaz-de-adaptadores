import React from 'react'
import adapters from '../data/adapters';
import './style.css';

const Plugins = () => {
  return (
    <>
      <div className="row">
        <h1 className="">Plugins</h1>
        <div className="d-grid  col-5 m-button-new ">
        <button className="btn text-light  btn-new-pluging">
          New + 
        </button>
        </div>
      </div>
      <div className="row mt-5">
        {adapters.map((item, index) => (
          <section>
            <div className="d-grid  col-8  mx-auto ">
              <button type="button" className="btn btn-light adapters mt-3 " key={index}>
                {item.name}
              </button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default Plugins
