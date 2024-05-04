import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import JoinOff from './components/Footer/JoinOff'
import './App.css'

const App = () => {
  return (
    <div>
      <Navigation/>
      <JoinOff/>
      <Footer/>
    </div>
  )
}

export default App