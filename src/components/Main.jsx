import React, { useEffect, useState } from 'react';
import Header from './Header';
import Plugins from './Plugins';
import Orchestration from './Orchestration';
import Footer from './Footer';
import { load } from 'js-yaml';
import Adapter from './Adapter';
import Modal from './Modal'

const Main = ({ initialOrchArray }) => {
  const [adapterArray, setAdapterArray] = useState([]);
  const [showOrch, setShowOrch] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  //este es el array de la orquestra, donde se van empujando los objetos que corresponden a las configuraciones de los adaptadores
  const [orchArray, setOrchArray] = useState(initialOrchArray);
  const [alert, setAlert] = useState(false);

  // Aqui definiremos el arreglo que va a manejar todas los ID que se seran usados como dependencias en los otros adaptadores
  // Si el usuario lo requiere, en caso contrario puede elegir tamgien el valor por defecto 'input'
  const [dependeciesList, setDependenciesList] = useState([
    { value: '0', label: 'input' },
  ])

  useEffect(() => {
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

  return (
    <div>
      <div className="container-fluid vh-100 ">
        <div className="row  bg-light">
          <Header />
        </div>
        <div className="row">
          <div className="col-3 vh-100  bg-secondary bg-opacity-10 background-plugins">
            <Plugins
              showPluginForm={showPluginForm}
              setShowOrch={setShowOrch}
              setShowBtn={setShowBtn}
            />
          </div>
          <div className="col-6 vh-100 overflow-auto " style={{ 'paddingLeft': '5%' }}>
            <Adapter
              adapterArray={adapterArray}
              setAdapterArray={setAdapterArray}
              showOrch={showOrch}
              orchArray={orchArray}
              setOrchArray={setOrchArray}
              setAlert={setAlert}
              dependeciesList={dependeciesList}
              setDependenciesList={setDependenciesList}
              showBtn={showBtn}
              setShowBtn={setShowBtn}
            />
          </div>
          {alert ? <Modal setAlert={setAlert}/> : null}
          <div className="col-3 vh-100 bg-secondary bg-opacity-25">
            {showOrch ?
              <Orchestration
                orchArray={orchArray}
                setOrchArray={setOrchArray}
              />
              : null}
          </div>
        </div>
        <div className="row bg-dark bg-gradient">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
