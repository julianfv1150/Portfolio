import './App.scss'
import Projects from './components/projects/Projects'
import { NavBar } from './components/NavBar/NavBar'
import Slider from './components/slider/Slider'
import Exp from './components/Exp/Exp'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <NavBar />
      <div id='about'>
        <Slider autoplay={true}/>
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='exp'>
        <Exp />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
