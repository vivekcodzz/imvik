import React from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

const Writing = () => {
  return (
    <div className="Main">
    <div className="container">
      <img src="/images/coverWriting.png" alt="" />
      <Nav/>
    </div>
    <div className="About_sec">
      <p>
      a place to collect my writing as i move away from twitter and start writing long form.
      </p>
      </div>
    <Footer/>
  </div>
  )
}

export default Writing

