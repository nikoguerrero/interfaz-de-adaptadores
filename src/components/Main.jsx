import React, { useState } from 'react';
import Header from './Header';
import Plugins from './Plugins';
import Orchestration from './Orchestration';
import Footer from './Footer';
import { load } from 'js-yaml';
import Adapter from './Adapter';

const Main = () => {
  const [adapterArray, setAdapterArray] = useState([]);
  const [show, setShow] = useState(false);

  /*1 Paso : Declaramos un estado llamado adapterIDList con su 
  metodo de cambio de estado setAdapterIDList inicializandolo como arreglo vacio*/
  const [adapterIDList, setAdapterIDList] = useState([]);

  const showPluginForm = (configuration) => {
    fetch(configuration)
      .then((response) => response.text())
      .then((yamlText) => {
        const yamlJsonObject = load(yamlText);
        setAdapterArray(yamlJsonObject)
      }).catch((err) => console.log('failed to load yaml file', err));
  };

  // 2 Paso : Declaramos el metodo saveAdapterIDInList para almacenar los ID de los adaptadores que tendra la orquestacion.
  // Este metodo se debe enviar como propiedad al componente responsable de realizar el guardado del adaptador
  // Componente responsable : Adapter
  const saveAdapterIDInList = (adaptarID) => {
   
    setAdapterIDList((prevAdapterIDList) => {
      return [...prevAdapterIDList, adaptarID];
    });
  }

  // Paso 3 : Se agrega al componente de la linea 47 como propiedad el metodo saveAdapterIDInList
  /*Pasp 6(Los Pasos 4 y 5 estan dentro del compoennte hijo 'Adapter') : Se agrega al componente de la linea 51 la propiedad
  adapterIDList */

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
          <div className="col-6 vh-100 ">
            <Adapter adapterArray={adapterArray} show={show} saveAdapterIDInList={saveAdapterIDInList} />
          </div>
          <div className="col-3 vh-100 bg-secondary bg-opacity-25">
            {show ? <Orchestration adapterIDList={adapterIDList} /> : null} 
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
