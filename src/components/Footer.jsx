import React from 'react';

const Footer = () => {

    const style = {
        backgroundColor: '#727272'
    }
    return (
      <>
        <footer className="bg-light text-center text-lg-start text-white  ">
          <div
            className="text-center p-3"
            style={ style }
          >
            © 2021 
            <a className="text-white" href="https://soluciones.equifax.cl/">
                 Equifax.Inc   
            </a>
              .   All rights reserved.
          </div>
         {/* <div className="p-3 mb-1 bg-dark bg-gradient d-flex"></div> */}
        </footer>
      </>
    );
    // )
};

export default Footer;
