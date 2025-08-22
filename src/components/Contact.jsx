import React from 'react'
import '../styles/hero.css'
import Discount from '../assets/disc.png'
const Contact = () => {
    return (
        <div className="contact">
            <div className="disc">
                <img src={Discount} alt="" />
                <div className="heading-disc">
                    <p>
                        Fill Out This Brief Form To Get Your</p>
                    <h2>Discount Reserved</h2>
                </div>
            </div>
            <form action="#" method="post">
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required /><br /><br />
                <input type="email" id="email" name="email" placeholder="Enter your email" required /><br /><br />
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required /><br /><br />
                <textarea id="project" name="project" rows="5" placeholder="Describe your project..." required></textarea><br /><br />
              <div className="con1btn">  
                <button className='cont-btn' type="submit">Submit</button>
              </div>
            </form>
        </div>
    )
}

export default Contact