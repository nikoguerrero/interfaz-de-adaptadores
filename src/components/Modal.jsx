import React from 'react';
import '../css/style.css';

const Modal = ({ setModal }) => {

  const handleClick = () => {
    setModal(false);
  };
  return (
    <div>
      <div className="modalBackground">
        <div className="modal-container">
          <div className="modal-content">
            <div className="body">
              <div className="h6 text-center mt-2">
                ID field can't be empty
              </div>
            </div>
            <button className="btn btn-primary mt-4 float-end" onClick={handleClick}> OK </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
