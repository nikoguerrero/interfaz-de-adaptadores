import React, { useEffect, useState } from 'react';
import Header from './Header';
import Plugins from './Plugins';
import Orchestration from './Orchestration';
import Footer from './Footer';
import { load } from 'js-yaml';
import Adapter from './Adapter';

const Main = ({ initialOrchArray }) => {
  const [adapterArray, setAdapterArray] = useState([]);
  const [show, setShow] = useState(false);

  //este es el array de la orquestra, donde se van empujando los objetos que corresponden a las configuraciones de los adaptadores
  const [orchArray, setOrchArray] = useState(initialOrchArray);
  const [alert, setAlert] = useState(false);

  // Aqui definiremos el arreglo que va a manejar todas los ID que se seran usados como dependencias en los otros adaptadores
  // Si el usuario lo requiere, en caso contrario puede elegir tambien el valor por defecto 'input'
  const [dependeciesList, setDependenciesList] = useState([
    { value: '0', label: 'input' },
  ])

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

  //modal se está agregando al div, pero no se ve.
  const AlertMessage = () => (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container-fluid vh-100 ">
        <div className="row  bg-light">
          <Header />
        </div>
        <div className="row">
          <div className="col-3 vh-100  bg-secondary bg-opacity-10 ackground-plugins">
            <Plugins showPluginForm={showPluginForm} setShow={setShow} />
          </div>
          <div className="col-6 vh-100 overflow-auto " style={{ 'padding-left': '5%' }}>
            <Adapter
              adapterArray={adapterArray}
              setAdapterArray={setAdapterArray}
              show={show}
              orchArray={orchArray}
              setOrchArray={setOrchArray}
              setAlert={setAlert}
              dependeciesList={dependeciesList}
              setDependenciesList={setDependenciesList}
            />
          </div>
          {alert ? <AlertMessage /> : null}
          <div className="col-3 vh-100 bg-secondary bg-opacity-25">
            {show ? <Orchestration orchArray={orchArray} setOrchArray={setOrchArray} /> : null}
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
