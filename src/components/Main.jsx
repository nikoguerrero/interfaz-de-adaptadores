import React from 'react';
import Header from './Header';
import Plugins from './Plugins';
import Form from './Form';
import Orchestration from './Orchestration';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
      <div className="container-fluid vh-100">
        <Header />
        <div className="row">
          <div className="col-3 vh-100  bg-secondary bg-opacity-10 ackground-plugins">
            <Plugins />
          </div>
          <div className="col-6 vh-100 ">
            <Form />
          </div>
          <div className="col-3 vh-100 bg-secondary bg-opacity-25">
            <Orchestration />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
};

export default Main;
