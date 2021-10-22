import React, { Fragment } from 'react';

const AdapterConfig = ({adapterArray}) => {
  if (adapterArray) {
    const adapterConfig = adapterArray[0].config; 
    console.log(adapterConfig);
  }

  return (
    <Fragment>
    </Fragment>
  )
}

export default AdapterConfig;