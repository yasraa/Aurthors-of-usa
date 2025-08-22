import React from 'react'
import '../../styles/hero.css'
import Contact from "../../components/Contact"
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Cont = () => {
        
  const paras = [
    <>Contact Us</>,
    <>Want to know more? Scroll down and learn more about us! Who we are and what do we do.</>,
   <></>
  ]
  return (
    <>
    <Nav/>
     <div className='hero'>
      <div className="main1">
      <div className="main-left">
        <div className="left-main-para">
             {paras.map((para, index) => (
        <p key={index}  className={
    index === 0
      ? "first-para"
      : index === 1
      ? "second-para"
      : "third-para"
  }>{para}</p>
      ))}
        </div>
      <div className="hero1btn">
        <div className="left-main-btn"><button>Call Now</button></div>
        <div className="right-main-btn"><button>Get Free Consultation</button></div>
        </div>
      </div>

      <div className="main-right">
      <Contact/>
      </div>

    </div>
<div className="contact-page">
    <h3>Get to know more about our services!</h3>
    <h1>GET IN TOUCH, CONNECT WITH US!</h1>
    <h5>Our support agents will assist you and address all your queries!</h5>
    <div className="cont-details">
       <div className="call">
        <div className="icon-call"><FaPhoneAlt size={30} /></div>
        <div className="det-mail">
            <p>Call now</p>
            <p>+1 (844) 422-1173</p>
        </div>
       </div>
       <div className="call">
        <div className="icon-mail"><IoMdMail size={34}/></div>
        <div className="det-mail">
            <p>Mail</p>
            <p>info@authorhouseusa.com</p>
        </div>
       </div>
       <div className="call">
        <div className="icon-add"><IoLocationSharp size={30} /></div>
        <div className="det-mail">
            <p>Address</p>
            <p>444 Alaska Avenue Suite #BUV476 Torrance, CA 90503 USA</p>
        </div>
       </div>
    </div>
</div>
    <Footer/>
    </div>
    </>

  )
}

export default Cont