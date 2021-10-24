import React, {useState} from 'react';
import adapters from '../data/adapters';
import PluginButton from './PluginButton';
import SearchBar from './SearchBar';
import './style.css';

const Plugins = (props) => {
  const { showPluginForm, setShow } = props;
  const [filteredAdapters, setFilteredAdapters] = useState(adapters);
  const [search, setSearch] = useState(false);

  const showPlugins = () => {
    document.getElementById("adapters").style.display = "grid";
    setSearch(true);
  };
  
  const handleSearch = (adapterText) => {
    let value = adapterText.toLowerCase();
    let filteredAdapters = [];
    filteredAdapters = adapters.filter((adapter) => adapter.name.toLowerCase().search(value) !== -1);
    console.log(filteredAdapters);
    setFilteredAdapters(filteredAdapters);
  };

  return (
    <>
      <div className="row">
        <h1 className="">Plugins</h1>
        <div className="d-grid  col-5 m-button-new ">
          <button className="btn btn-primary" onClick={showPlugins}>+ New</button>
        </div>
      </div>
      
        {search ? <SearchBar handleSearch={handleSearch} /> : null}
      
       <div id='adapters' className="row mt-3 " style={{ display: 'none' }}>
        {filteredAdapters.map((item, index) => (
          <section key={index}>
            <div className="d-grid  col-8  mx-auto ">
              <PluginButton item={item} showPluginForm={showPluginForm} setShow={setShow}/>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Plugins;
