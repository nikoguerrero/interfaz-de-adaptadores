import React from 'react';
import adapters from '../data/adapters';
import './style.css';

const Plugins = () => {
    const showPlugins = () => {
        document.getElementById("adapters").style.display = "grid";
    }

    return (
        <>
            <div className="row">
                <h1 className="">Plugins</h1>
                <div className="d-grid  col-5 m-button-new ">
                    <button className="btn text-light  btn-new-pluging" onClick={showPlugins}>
                        New +
                    </button>
                </div>
            </div>
            <div id='adapters' className="row mt-5" style={{ display: 'none' }}>
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
