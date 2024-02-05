import Nav from "./components/Nav"
import Home from "./components/Home"
import PraticleBg from "./components/PraticleBg"
import About from "./components/About"
import Skills from "./components/Skills"
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
        
        <Nav />
        <PraticleBg />
      </div>



    </>
  )
}

export default App
