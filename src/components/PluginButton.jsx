import React from 'react';
import './style.css';

const PluginButton = (props) => {
  const { item, showPluginForm, setShow } = props;
  const { name, configuration } = item;
  const handleShowPluginForm = () => {
    showPluginForm(configuration);
    setShow(true);
  };

  return (
    <>
      <div className="row">
        <button type="button" className="btn btn-light adapters mt-3 " onClick={handleShowPluginForm}>
          {name}
        </button>
      </div>
    </>
  );
};

export default PluginButton;
