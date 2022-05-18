import { Link } from "react-router-dom";
import logoWhite from "../../img/logo-light.png"
export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="links">
          <Link to="/"><img src={logoWhite} alt="company logo"/></Link>
          <nav className="navbar">
              <ul className="navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Our Company</Link></li>
                <li><Link to="/location">Location</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
        </div>
        <hr />
        <div className="location-contact-socials">
          <small>Designo Central Office <br/>  3886 Wellington Street <br/> Toronto, Ontario M9C 3J5 </small>
          <small> Contact Us (Central Office) <br/> P : +1 253-863-8967 <br/>M : contact@designo.com</small>
          <div className="socials">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-youtube-square"></i>
            
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-pinterest-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}