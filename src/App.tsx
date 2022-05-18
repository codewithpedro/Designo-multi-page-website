import './App.css'
import Footer from './components/common/Footer'
import Navigation from './components/common/Navigation'
import QuickContact from './components/common/QuickContact';
import Hero from './components/pages/home/Hero';
import Process from './components/pages/home/Process';
import Projects from './components/pages/home/Projects';

function App() {
  return (
    <>
      <Navigation></Navigation>
      
      <div className="home">
        <Hero></Hero>
        <Projects></Projects>
        <Process></Process>
      </div>

      <QuickContact></QuickContact>
      <Footer></Footer>
    </>
  )
}

export default App
