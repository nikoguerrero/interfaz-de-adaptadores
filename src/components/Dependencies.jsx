import React from 'react';
import Select from 'react-select';

const Dependecies = ({dependeciesList}) => {
  const options = dependeciesList;
  const style = {
    control: base => ({
      ...base,
      padding: '10px '
    }),

  };
  return (
    <div>
      <Select options={options} styles={style} />
    </div>
  )
};

export default Dependecies;
