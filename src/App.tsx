import './App.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Comment from './components/comment/Comment'
import HardSkill from './components/hardSkills/HardSkills'
import SoftSkill from './components/softSkills/SoftSkills'

function App() {

  return (
    <>
      <div className='containerLarge'><About /></div>
      <div className='containerVertical'><HardSkill title='Habilidades duras' /></div>
      <div className='containerVertical'><SoftSkill /></div>
      <div className='containerLarge' id='project'>Projects</div>
      <div className='containerLarge noRow'><Comment /></div>
      <div className='containerVertical'><Contact /></div>
    </>
  )
}

export default App
