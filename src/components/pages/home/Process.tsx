export default function Process() {
  const processList = [
    {
      title: "Passionate",
      desc: " Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      imgLocation: "/illustration-passionate.svg",
      alt: "Person drawing on a tablet"
    },
    {
      title: "Resourceful",
      desc: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      imgLocation: "/illustration-resourceful.svg",
      alt: "person drawing on a tablet"
    },
    {
      title: "Friendly",
      desc: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.", 
      imgLocation: "/illustration-friendly.svg",
      alt: "Two persons holding a sign"
    } 
  ];

  const processElement: any = processList.map((singleProcess, index) => {
    return (
      <div key={index} className="process-single" id={`${index}-process`}>
        <img src={singleProcess.imgLocation} alt={singleProcess.alt} />
        <div className="content">
          <h5>{singleProcess.title}</h5>
          <p>{singleProcess.desc}</p>
        </div>
      </div>
    )
  })
  
  return (
    <div className="process">
      {processElement}
    </div>
  )
}