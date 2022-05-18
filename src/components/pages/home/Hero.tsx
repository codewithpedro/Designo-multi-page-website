import imgHero from "../../../img/image-hero-phone.png";
import { Link
 } from "react-router-dom";
export default function Hero(){
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1>Award-winning custom <br/>designs and digital <br/>branding solutions</h1>
          <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <Link to="/contact" className="btn btn-gray">Contact Us!</Link>
        </div>
        
        <img className="phone overflow" src={imgHero} alt="iphone with an image of furnature and text Frame"></img>
      </div>
    </div>
  )
}