import React from 'react'
import Contact from '../../components/Contact'
import '../../styles/hero.css'

const Contactpage = () => {

  return (
        <div className='hero'>
          <div className="main1">
          <div className="main-left">
            <div className="left-main-para"> 
</div>
          <div className="hero1btn">
            <div className="left-main-btn"><button>Call Now</button></div>
            <div className="right-main-btn"><button>Get Free Consultation</button></div>
            </div>
            <div className="left-main-logos">
              <img src={Trusticon} alt="" />
              </div>
          </div>
    
          <div className="main-right">
          <Contact/>
          </div>
          </div>
          </div>
          
  )
}

export default Contactpage