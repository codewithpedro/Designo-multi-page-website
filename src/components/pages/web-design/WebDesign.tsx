import Footer from "../../common/Footer";
import Navigation from "../../common/Navigation";
import QuickContact from "../../common/QuickContact";
import webData from "./WebDesignData";
import Project from "../home/Project";

export default function WebDesign() {
  const articles = webData.map((article, index) => {
    return (
      <div className="article" key={index}>
        <img src={article.imgLocation} alt={`A webpage for ${article.title}`} />
        <div className="content">
          <h3>{article.title}</h3>
          <p>{article.desc}</p>
        </div>
      </div>
    )
  })
  return (
    <>
      <Navigation></Navigation>
      <div className="design web">
        <div className="hero">
          <div className="container full">
            <div className="content">
              <h1>Web Design</h1>
              <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="container">
            {articles}
          </div>
        </div>
        <div className="projects">
          <Project title="App Design" imgLocation="/image-app-design.jpg" subtitle="iPhone with lyft application" link="/app-design"></Project>
          <Project title="Graphic Design" imgLocation="/image-graphic-design.jpg" subtitle="mordern art" link="/graphic-design"></Project>
        </div>
      </div>
      <QuickContact></QuickContact>
      <Footer></Footer>
    </>
  )
}