import Footer from "../../common/Footer";
import Navigation from "../../common/Navigation";
import BriefLocation from "../../common/BriefLocation";

export default function Contact(){
  return (
    <>
      <Navigation></Navigation>
      <div className="contact">
        <div className="form-section">
          <div className="container full">
            <div className="content">
              <h2>Contact Us</h2>
              <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>

            <form className="form-contact">
              <div className="form-section">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-section">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="form-section">
              <label htmlFor="phone">Enter your phone number:</label>
                <input type="tel" id="phone" name="phone"/>
              </div>
              <div className="form-section">
                <label htmlFor="message">Message: </label>
                <textarea name="message" id="comment" />
              </div>
                <button className="btn btn-white">Submit</button>
            </form>
          </div>

        </div>
        <BriefLocation></BriefLocation>
        <Footer></Footer>
      </div>
    </>
  )
}