import React, { useState } from 'react';
import Header from './Header';
import Plugins from './Plugins';
import Orchestration from './Orchestration';
import Footer from './Footer';
import { load } from 'js-yaml';
import Adapter from "./Adapter";

const Main = () => {
  const [adapterArray, setAdapterArray] = useState([]);

  const showPluginForm = (configuration) => {
    fetch(configuration)
      .then((response) => response.text())
      .then((yamlText) => {
        const yamlJsonObject = load(yamlText);
        setAdapterArray(yamlJsonObject)
      }).catch((err) => console.log('failed to load yaml file', err));
  }

  return (
    <div>
      <div className="container-fluid vh-100">
        <Header />
        <div className="row">
          <div className="col-3 vh-100  bg-secondary bg-opacity-10 ackground-plugins">
            <Plugins showPluginForm={showPluginForm} />
          </div>
          <div className="col-6 vh-100 ">
            <Adapter adapterArray={adapterArray} />
          </div>
          <div className="col-3 vh-100 bg-secondary bg-opacity-50">
            <Orchestration />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
};

export default Main;
