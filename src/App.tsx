import './App.scss'
import Contact from './components/contact/Contact'
import Comment from './components/comment/Comment'
import SoftSkill from './components/softSkills/SoftSkills'
import Projects from './components/projects/Projects'
import { NavBar } from './components/NavBar/NavBar'
import Slider from './components/slider/Slider'

function App() {

  return (
    <>
      <NavBar />
      <section id='about'>
        <Slider autoplay={true}/>
      </section>
      <section id='projects'>
        <p>Mis proyectos</p>
      </section>
      <section id='exp'>
        <p>Exp</p>
      </section>
      <section id='contact'>
          <p>Contacto</p>
      </section>
      <div className='containerVertical'><Contact /></div>
      <div className='containerLarge noRow' id='project'><Projects title='Mis proyectos' /></div>
      <div className='containerLarge noRow'><Comment /></div>
      <div className='containerVertical'><SoftSkill /></div>
    </>
  )
}

export default App
