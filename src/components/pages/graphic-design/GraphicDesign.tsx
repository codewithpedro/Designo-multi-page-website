import Footer from "../../common/Footer";
import Navigation from "../../common/Navigation";
import QuickContact from "../../common/QuickContact";
import Project from "../home/Project";
import graphData from "./GraphData";

export default function GraphicDesign() {
  const articles = graphData.map((article, index) => {
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
      <div className="design graphic">
        <div className="hero">
          <div className="container full">
            <div className="content">
              <h1>Graphic Design</h1>
              <p> We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
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
          <Project title="Web Design" imgLocation="/image-web-design-small.jpg" subtitle="mordern art" link="/web-design"></Project>
        </div>
      </div>
      <QuickContact></QuickContact>
      <Footer></Footer>
    </>
  )
}