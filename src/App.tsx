import './App.scss'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Comment from './components/comment/Comment'

function App() {

  return (
    <>
      <div className='containerLarge'><About /></div>
      <div className='containerVertical'>hard Skill</div>
      <div className='containerVertical'>Soft Skill</div>
      <div className='containerLarge'>Projects</div>
      <div className='containerLarge'><Comment /></div>
      <div className='containerVertical'><Contact /></div>
    </>
  )
}

export default App
