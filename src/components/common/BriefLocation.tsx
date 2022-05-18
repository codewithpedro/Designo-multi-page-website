import { Link } from "react-router-dom";
import canada from "../../img/illustration-canada.svg";
import australia from "../../img/illustration-australia.svg";
import unitedKingdom from "../../img/illustration-united-kingdom.svg";

export default function BriefLocation() {
  return (
    <div className="brief-location">
          <div className="container">
            <div className="section">
              <img src={canada} alt="canada" />
              <h3>Canada</h3>
              <Link to="/location" className="btn btn-peach">See Location</Link>
            </div>
            <div className="section">
              <img src={australia} alt="australia" />
              <h3>Australia</h3>
              <Link to="/location" className="btn btn-peach">See Location</Link>
            </div>
            <div className="section">
              <img src={unitedKingdom} alt="united kingdom" />
              <h3>United Kingdom</h3>
              <Link to="/location" className="btn btn-peach">See Location</Link>
            </div>
          </div>
        </div>
  )
}