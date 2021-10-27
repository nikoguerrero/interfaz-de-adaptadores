import React from "react";
import logo from '../assets/Component-8.svg'
import icon1 from '../assets/Vector-(1).svg'
import icon2 from '../assets/Vector-(2).svg'
import icon3 from '../assets/Vector-(3).svg'
import icon4 from '../assets/Vector-(4).svg'
import icon5 from '../assets/person-circle.svg'
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light shadow ">
        <div className="ms-4">
         <img src={logo} alt="" /> 
        </div>
          <form className="d-flex">
            <img src={icon1} className="me-4" alt="" />
            <img src={icon2} className="me-4" alt="" />
            <img src={icon3} className="me-4" alt="" />
            <img src={icon4} className="me-4" alt="" />
            <img src={icon5} className="me-4" alt="" />
          </form>
      </nav>
     
    </>
  );
}
  

export default Header;
