import { Link } from "react-router-dom";

export default function QuickContact(){
  return (
    <div className="quick-contact">
      <div className="container">
        <div className="content">
          <h1>Let’s talk about your project</h1>
          <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow. </p>
        </div>
        <Link to="/contact" className="btn btn-gray">Get In Touch</Link>
      </div>
    </div>
  )
}