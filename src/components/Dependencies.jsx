import React from 'react';
import Select  from 'react-select';

const Dependecies = ({dependenciesList, adapter}) => {
  const options = dependenciesList;
  const style = {
    control: base => ({
      ...base,
      padding: '10px '
    }),
  };

  const setAdapterDependency = (dependency) => {
    adapter.dependencies = dependency;
  };
  
  return (
    <div>
      <Select
      placeholder={'Dependencies  '} 
      options={options} 
      styles={style} 
      onChange={(e) => setAdapterDependency(e.label)}
      />
    </div>
  )
};

export default Dependecies;
