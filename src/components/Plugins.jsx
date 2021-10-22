import React from 'react'
import './style.css'
const Plugins = () => {
    return (
      <>
         <h1 className="">Plugins</h1>
            <div className="btn text-light btn-new-pluging float-end">
                New Pluging
            </div>
            <div className="row mt-5">
            <div className="d-grid gap-2 col-8  mx-auto list-adapters">
                <button type="button" class="btn btn-light adapters mt-2 ">Input Handler </button>
                <button type="button" class="btn btn-light adapters mt-2">Key Finder </button>
                <button type="button" class="btn btn-light adapters mt-2">Data Enricher </button>
                <button type="button" class="btn btn-light adapters mt-2">Filter Client </button>
                <button type="button" class="btn btn-light adapters mt-2">Calculate Models </button>
                <button type="button" class="btn btn-light adapters mt-2">Evaluate Conditions </button>
                <button type="button" class="btn btn-light adapters mt-2">Output Handler </button>
            </div>
            </div>
           
              
               
            
        </>
    )
}

export default Plugins
