import Footer from "../../common/Footer";
import Navigation from "../../common/Navigation";
import QuickContact from "../../common/QuickContact";

export default function Location() {
  return (
    <>
      <Navigation></Navigation>
      <div className="location">
        <div className="container full">  
          <div className="section">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8085844517!2d-79.51814045437209!3d43.71840381064974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1652832687281!5m2!1sen!2sus"></iframe>
            <div className="content">
              <h2>Canada</h2>
              <div className="content-flex">
                <p><span className="bold">Designo Central Office</span> <br/> 3886 Wellington Street <br/> Toronto, Ontario M9C 3J5 </p>
                <p><span className="bold">Contact</span><br/> P : +1 253-863-8967<br/>  M : contact@designo.co</p>
              </div>
              
            </div>
          </div>
          <div className="section">
              <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8085844517!2d-79.51814045437209!3d43.71840381064974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1652832687281!5m2!1sen!2sus"></iframe>
              <div className="content">
                <h2>United kingdom</h2>
                <div className="content-flex">
                  <p><span className="bold"> Designo UK Office </span> <br/>  13 Colorado Way <br/>  Rhyd-y-fro SA8 9GA  </p>
                  <p><span className="bold">Contact</span><br/>P : 078 3115 1400 <br/>M : contact@designo.uk</p>
                </div>
              </div>
          </div>
          <div className="section">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6872893.005790776!2d145.56244339700248!3d-32.74171880474222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0dcb74f75e4b0d%3A0x1780af1122c49f2d!2sNew%20South%20Wales%2C%20Australia!5e0!3m2!1sen!2sus!4v1652834301339!5m2!1sen!2sus"></iframe>
            <div className="content">
              <h2>Australia</h2>
              <div className="content-flex">
                <p><span className="bold"> Designo AU Office</span><br/>19 Balonne Street<br/>  New South Wales 2443</p>
                <p><span className="bold">Contact</span><br/> P : (02) 6720 9092 <br/> M : contact@designo.au</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickContact></QuickContact>
      <Footer></Footer>
    </>
  )
}