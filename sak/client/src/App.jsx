import { BrowserRouter } from "react-router-dom" ;
// import { Hero, Navbar, }from "./components/Hero";
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import Services from "./components/Services";
// import { Component } from "react"

function App() {

  return (
    <BrowserRouter>
      <div>
      <Navbar />
      <Hero />
      </div>
      <Services/>
    </BrowserRouter>
  )
}

export default App
