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
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </>
    );
};

export default Footer;
