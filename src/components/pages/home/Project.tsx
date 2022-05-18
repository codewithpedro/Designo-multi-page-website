import { Link } from "react-router-dom"

export default function Project({title, imgLocation, subtitle, link}: {title: string, imgLocation: string, subtitle: string, link :string}){
  return (
    <div className="project">
      <Link to={link}>
        <div className="overlay">
          <img src={imgLocation} alt={subtitle} />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <div className="subtitle">
            <h4>view projects</h4>
            <span><i className="fa-solid fa-greater-than"></i></span>
          </div>
        </div>
      </Link>
    </div>
)
}