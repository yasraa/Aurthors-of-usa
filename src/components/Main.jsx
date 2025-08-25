import React from 'react'
import Axiom from '../assets/axiom.webp'
import Gold from '../assets/gold.webp'
import Finalist from '../assets/finalist.webp'
import Global from '../assets/global.webp'
import Illum from '../assets/illum.webp'
import Moon from '../assets/moon.webp'
import Bookreview from '../assets/book-review.png'
import Quality from '../assets/reason-icon1.png'
import Delivery from '../assets/reason-icon2.png'
import Satisfaction from '../assets/reason-icon3.png'
import Ownership from '../assets/reason-icon4.png'
import Sideimg from '../assets/cta-side-image.png'
import '../styles/main.css'


const Main = ({ mainones,mainthrees }) => {
    return (
        <div>
            <div className="achievment">
                <h3>AWARD-WINNING BOOK CREATION IS OUR FORTE</h3>
                <div className="ach-img">
                <img src={Axiom} alt="" />
                <img src={Gold} alt="" />
                <img src={Finalist} alt="" />
                <img src={Global} alt="" />
                <img src={Illum} alt="" />
                <img src={Moon} alt="" />
                </div>
            </div>
            <div className="main-one">
                <div className="main-one-left">
                    <img src={Bookreview} alt="" />
                </div>
                <div className="main-one-right">
                    {mainones.map((mainone, index) => (
                        <div key={index} className='sis'>
                            <h3>{mainone.heading}</h3>
                            <p>{mainone.subheading}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="main-two">
                <div className="quality-work">
                    <img src={Quality}  />
                    
                    <div className="wrap">
                        <h3>Quality Work</h3>
                    <p>
                        We’re committed to providing top-quality work every time. Our best ghostwriters for hire put their expertise into creating
                        the perfect strategy for each project, ensuring your story is told exactly how you dream of it.
                    </p>
                    </div>
                </div>
                <div className="quality-work">
                    <img src={Delivery} alt="" />
                    <div className="wrap">
                    <h3>Timely Delivery</h3>
                    <p>
                        Our team works hard to meet deadlines, and we make sure everything is done ahead of time.
                        You can count on us to stay on track and provide splendid work exactly when you need it.
                    </p>
                    </div>
                </div>
                <div className="quality-work">
                    <img src={Satisfaction} alt="" />
                    <div className="wrap">
                    <h3>Costumer Satisfaction</h3>
                    <p>
                        Let us help you make a finished masterpiece out of your initial book idea with our professional ghost writing services.
                        We promise to provide an excellent book that matches your vision and surpasses your expectations.
                    </p>
                    </div>
                </div>
                <div className="quality-work">
                    <img src={Ownership} alt="" />
                    <div className="wrap">
                    <h3>100% Ownership</h3>
                    <p>
                        Our ghostwriting company gives you complete ownership of your book. Everything we create is yours to keep and share as you wish.
                    </p>
                    </div>
                </div>
            </div>
            <div className="main-three">
                <div className="main-three-left">
                    {mainthrees.map((mainthree, index) => (
        <p key={index}  className={
    index === 0
      ? "first-para"
      : index === 1
      ? "second-para"
      : "third-para"
  }>{mainthree}</p>
      ))}
<div className="main-three-btn"><button>Live Consultation</button><button>Live Chat</button></div>
<p>Toll Free: (855) 261-8981</p>
                </div>
                <div className="main-three-right">
                    <img src={Sideimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main