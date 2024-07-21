import React from 'react'
import './App.css'
import Landing from './Components/Landing/Landing'
import Services from './Components/Services-Home/Services'
import Industries from './Components/Industries/Industries'

const App = () => {
  return (
    <>
      <Landing />
      <Services />
      <Industries />
      <div className="space"></div>
    </>
  )
}

export default App