import Nav from "./components/Nav"
import Home from "./components/Home"
import PraticleBg from "./components/PraticleBg"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Cv from "./components/Cv"
import Carousel from './components/Carousel';

import './App.css'

function App() {


  return (
    <>
      <div>

        <Home />
        <About />
        <div className="w-full h-screen backdrop-blur-sm ">
          <Skills />
        </div>

        <Projects  />
        <Nav />


        <PraticleBg />

      </div>



    </>
  )
}

export default App
