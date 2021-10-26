import React from 'react'
import './style.css' 

const Modal = ({setAlert}) => {
    
    const handleClick = () => {
        setAlert(false)
    }
    return (
      <div>
        <div className="modalBackground">
          <div className="modal-container">
            <div className="modal-content">
              <div className="body">
                <span className="h4 text-center">
                La ID del plugin debe ser única
                </span>
              </div>
              <div className="footer">
                {/* <Link to="/"> */}
                  <button className="btn btn-primary mt-5  float-end" onClick={ handleClick }> Ok </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Modal
