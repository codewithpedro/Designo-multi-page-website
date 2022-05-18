import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../img/logo-dark.png";

export default function Navigation(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <div className="layout-container">
        <div className="nav-flex">
          <Link to="/"><img className="logo" src={logo} alt="Designo Logo"/></Link>

          <button className="mobile-bars" onClick={() => setIsOpen(prevState => !prevState)}><i className={isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i></button>

          <nav className={isOpen ? "navbar active"  : "navbar"}>
            <ul className="navbar-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Company</Link></li>
              <li><Link to="/location">Location</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}