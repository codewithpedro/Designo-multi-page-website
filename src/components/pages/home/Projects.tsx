import Project from "./Project";

export default function Projects(){
  return (
    <div className="projects">
      <Project title="Web Design" imgLocation="/image-web-design-small.jpg" subtitle="laptop in gray filter" link="/web-design"></Project>
      <div className="side-project">
        <Project title="App Design" imgLocation="/image-app-design.jpg" subtitle="iPhone with lyft application" link="/app-design"></Project>
        <Project title="Graphic Design" imgLocation="/image-graphic-design.jpg" subtitle="mordern art" link="/graphic-design"></Project>
      </div>
    </div>
  )
}