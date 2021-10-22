import React, { Fragment } from 'react';
import adapters from './data/adapters';

const AdapterList = () => {
  return (
    <Fragment>
      <ul>
        {
          adapters.map((item) => (
            <section>
              <div>
                <button>
                {item.name}
                </button>
              </div>
            </section>
           
          ))
        }
      </ul>
    </Fragment>
  )
};

export default AdapterList;