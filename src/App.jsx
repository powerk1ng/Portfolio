import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'



const App = () => {
  return (
    <div className='relative'>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/> 
    </div>
  )
}

export default App