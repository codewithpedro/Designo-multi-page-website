import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import ScrollToTop from './components/common/ScrollToTop';
import About from './components/pages/about/About';
import AppDesign from './components/pages/app-design/AppDesign';
import Contact from './components/pages/contact/Contact';
import GraphicDesign from './components/pages/graphic-design/GraphicDesign';
import Location from './components/pages/location/Location';
import WebDesign from './components/pages/web-design/WebDesign';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/web-design" element={<WebDesign/>} />
      <Route path="/app-design" element={<AppDesign />} />
      <Route path="/graphic-design" element={<GraphicDesign />} />
    </Routes>
  </BrowserRouter>
)
