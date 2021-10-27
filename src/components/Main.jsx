import React, { useEffect, useState } from 'react';
import Header from './Header';
import Plugins from './Plugins';
import Orchestration from './Orchestration';
import Footer from './Footer';
import { load } from 'js-yaml';
import Adapter from './Adapter';
import Modal from './Modal';
import Alert from './Alert';

const Main = ({ initialOrchArray }) => {
  const [adapterArray, setAdapterArray] = useState([]);
  const [showOrch, setShowOrch] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [adapterName, setAdapterName] = useState('');
  const [orchArray, setOrchArray] = useState(initialOrchArray);
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [dependenciesList, setDependenciesList] = useState([
    { value: '0', label: 'input' },
  ]);

  useEffect(() => {
    const orchJson = JSON.stringify(orchArray);
    localStorage.setItem('orchestration', orchJson);
  }, [orchArray]);

  const showPluginForm = (configuration, name) => {
    fetch(configuration)
      .then((response) => response.text())
      .then((yamlText) => {
        const yamlJsonObject = load(yamlText);
        setAdapterArray(yamlJsonObject);
        setAdapterName(name);
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
              adapterName={adapterName}
              adapterArray={adapterArray}
              setAdapterArray={setAdapterArray}
              showOrch={showOrch}
              orchArray={orchArray}
              setOrchArray={setOrchArray}
              setAlert={setAlert}
              dependenciesList={dependenciesList}
              setDependenciesList={setDependenciesList}
              showBtn={showBtn}
              setShowBtn={setShowBtn}
              modal={modal}
              setModal={setModal}
            />
          </div>
          {modal ? <Modal setModal={setModal} /> : null}
          {alert ? <Alert setAlert={setAlert} /> : null}
          <div className="col-3 vh-100 bg-secondary bg-opacity-10">
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
