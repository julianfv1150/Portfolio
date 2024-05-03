import './App.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Comment from './components/comment/Comment'
import HardSkill from './components/hardSkills/HardSkills'
import SoftSkill from './components/softSkills/SoftSkills'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <div className='containerLarge'><About /></div>
      <div className='containerVertical'><Contact /></div>
      <div className='containerVertical'><HardSkill title='Habilidades duras' /></div>
      <div className='containerLarge noRow' id='project'><Projects title='Mis proyectos' /></div>
      <div className='containerLarge noRow'><Comment /></div>
      <div className='containerVertical'><SoftSkill /></div>
    </>
  )
}

export default App
