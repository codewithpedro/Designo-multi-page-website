import Footer from "../../common/Footer";
import Navigation from "../../common/Navigation";
import QuickContact from "../../common/QuickContact";
import Project from "../home/Project";
import AppData from "./AppData";

export default function AppDesign() {
  const articles = AppData.map((article, index) => {
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
      <div className="design app">
        <div className="hero">
          <div className="container full">
            <div className="content">
              <h1>App Design</h1>
              <p>  Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="container">
            {articles}
          </div>
        </div>
        <div className="projects">
          <Project title="Web Design" imgLocation="/image-web-design-small.jpg" subtitle="mordern art" link="/web-design"></Project>
          <Project title="Graphic Design" imgLocation="/image-graphic-design.jpg" subtitle="mordern art" link="/graphic-design"></Project>
        </div>
      </div>
      <QuickContact></QuickContact>
      <Footer></Footer>
    </>
  )
}