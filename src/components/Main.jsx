import React, { useEffect, useState } from 'react';
import Header from './Header';
import Plugins from './Plugins';
import Orchestration from './Orchestration';
import Footer from './Footer';
import { load } from 'js-yaml';
import Adapter from './Adapter';

const Main = ({initialOrchArray}) => {
  const [adapterArray, setAdapterArray] = useState([]);
  const [show, setShow] = useState(false);

  //este es el array de la orquestra, donde se van empujando los objetos que correpsponden a las configuraciones de los adaptadores
  const [orchArray, setOrchArray] = useState(initialOrchArray);

  useEffect(() => {
    // const adapterId = 'adapter-'.concat(Date.now());
    const orchJson = JSON.stringify(orchArray);
    localStorage.setItem('orchestration', orchJson);
  }, [orchArray]);

  const showPluginForm = (configuration) => {
    fetch(configuration)
      .then((response) => response.text())
      .then((yamlText) => {
        const yamlJsonObject = load(yamlText);
        setAdapterArray(yamlJsonObject)
      }).catch((err) => console.log('failed to load yaml file', err));
  };

  console.log(orchArray);

  return (
    <div>
      <div className="container-fluid vh-100 ">
      <div className="row  bg-light">
        <Header />
        </div>
        <div className="row">
          <div className="col-3 vh-100  bg-secondary bg-opacity-10   overflow-auto">
            <Plugins showPluginForm={showPluginForm} setShow={setShow} />
          </div>
          <div className="col-6 vh-100 overflow-auto" style={{ 'padding-left': '5%' }}>
            <Adapter adapterArray={adapterArray} show={show} orchArray={orchArray} setOrchArray={setOrchArray}/>
          </div>
          <div className="col-3 vh-100 bg-secondary bg-opacity-25">
            {show ? <Orchestration orchArray={orchArray}/> : null}
          </div>
        </div>
        <div className="row   bg-dark bg-gradient">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
