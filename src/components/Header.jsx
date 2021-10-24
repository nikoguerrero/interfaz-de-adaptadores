import React from "react";
import logo from '../assets/Component-8.svg'
import icon1 from '../assets/Vector-(1).svg'
import icon2 from '../assets/Vector-(2).svg'
import icon3 from '../assets/Vector-(3).svg'
import icon4 from '../assets/Vector-(4).svg'

const Header = () => {
  return (
    <>
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light shadow ">
        
        <div className="me-5">
         <img src={logo} alt="" /> 
        </div>
          <form className="d-flex">
            <img src={icon1} className="m-1" alt="" />
            <img src={icon2} className="m-1" alt="" />
            <img src={icon3} className="m-1" alt="" />
            <img src={icon4} className="m-1" alt="" />
          </form>
      </nav>
        </div>
    </>
  );
};

export default Header;
