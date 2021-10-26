import React from 'react';
import './style.css';

const PluginButton = (props) => {
  const { item, showPluginForm, setShowBtn } = props;
  const { name, configuration } = item;

  const handleShowPluginForm = () => {
    showPluginForm(configuration);
    setShowBtn(true);
  };

  return (
    <>
      <div className="row">
        <button type="button" className="btn btn-light adapters mt-2 " onClick={handleShowPluginForm}>
          {name}
        </button>
      </div>
    </>
  );
};

export default PluginButton;
