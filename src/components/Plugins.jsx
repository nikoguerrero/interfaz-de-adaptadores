import React from 'react';
import adapters from '../data/adapters';
import PluginButton from './PluginButton';
import './style.css';

const Plugins = ({showPluginForm}) => {
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
                            <PluginButton item={item} showPluginForm={showPluginForm} />
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
};

export default Plugins;
