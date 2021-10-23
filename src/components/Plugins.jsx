import React from 'react';
import adapters from '../data/adapters';
import './style.css';

const Plugins = () => {
  return (
    <>
      <div className="row">
        <h1 className="">Plugins</h1>
        <div className="d-grid  col-5 m-button-new ">
          <button className="btn text-light  btn-new-pluging">New +</button>
        </div>
      </div>
      <div className="row mt-5">
      <div className="d-grid  col-8  mx-auto ">
      <div class="input-group rounded">
      <span class="input-group-text border-0" id="search-addon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
      </div>
      </div>
      <div className="row mt-3">
        {adapters.map((item, index) => (
          <section key={index}>
            <div className="d-grid  col-8  mx-auto ">
              <button type="button" className="btn btn-light adapters mt-3 ">
                {item.name}
              </button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Plugins;
