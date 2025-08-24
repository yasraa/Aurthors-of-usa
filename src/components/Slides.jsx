import { useState } from 'react';
import img1 from  '../assets/1.jpg'
import img2 from  '../assets/2.jpg'
import img3 from  '../assets/3.jpg' 
import img4 from  '../assets/4.jpg'
import img5 from  '../assets/5.jpg'
import img6 from  '../assets/6.jpg'
import img7 from  '../assets/7.jpg'
import img8 from  '../assets/8.jpg'
import img9 from  '../assets/9.jpg'
import img10 from  '../assets/10.jpg'
import img11 from  '../assets/11.jpg'
import img12 from  '../assets/12.jpg'
import img13 from  '../assets/13.jpg'
import img14 from  '../assets/14.jpg'
import img15 from  '../assets/15.jpg'
import img16 from  '../assets/16.jpg'
import img17 from  '../assets/17.jpg'
import img18 from  '../assets/18.jpg'
import img19 from  '../assets/19.jpg'
import img20 from  '../assets/20.jpg'
import img21 from  '../assets/21.jpg'
import img22 from  '../assets/22.jpg'
import img23 from  '../assets/23.jpg'
import img24 from  '../assets/24.jpg'
import img25 from  '../assets/25.jpg'
import img26 from  '../assets/26.jpg'
import img27 from  '../assets/27.jpg'
import img28 from  '../assets/28.jpg'
import img29 from  '../assets/29.jpg'
import img30 from  '../assets/30.jpg'
import img31 from  '../assets/31.jpg'
import img32 from  '../assets/32.jpg'
import img33 from  '../assets/33.jpg'
import img34 from  '../assets/34.jpg'
import img35 from  '../assets/35.jpg'
import img36 from  '../assets/36.jpg'
import img37 from  '../assets/37.jpg'
import img38 from  '../assets/38.jpg'
import img39 from  '../assets/39.jpg'
import img40 from  '../assets/40.jpg'
import img51 from  '../assets/51.jpg'
import img52 from  '../assets/52.jpg'
import img53 from  '../assets/53.jpg'
import img54 from  '../assets/54.jpg'
import img55 from  '../assets/55.jpg'
import img56 from  '../assets/56.jpg'
import img57 from  '../assets/57.jpg'
import img58 from  '../assets/58.jpg'
import img59 from  '../assets/59.jpg'
import img60 from  '../assets/60.jpg'
import '../styles/slides.css'
const Slides = ({tabs}) => {

      const [activeTab, setActiveTab] = useState(tabs[0]); // default to first tab
     
      const gallery = [
  {
    id: 1,
    label: "Fiction",
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
  },
  {
    id: 2,
    label: "Non-Fiction",
    images: [img11, img12, img13, img14, img15, img16, img17, img18, img19, img20],
  },
  {
    id: 3,
    label: "Biography",
    images: [img21, img22, img23, img24, img25, img26, img27, img28, img29, img30],
  },
    {
    id: 4,
    label: "Children",
    images: [img31, img32, img33, img34, img35, img36, img37, img38, img39, img40],
  },
 
    {
    id: 5,
    label: "Informative",
    images: [img51, img52, img53, img54, img55, img56, img57, img58, img59, img60],
  }
];
 const [activeGallery, setActiveGallery] = useState(gallery[0]);
  return (
    <div className="slides-container">

 <div className='sec-slide-main'>
      {/* Buttons */}
      <div className='sec-slide-btn'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab.id === tab.id ? "#333" : "#ccc",
              color: activeTab.id === tab.id ? "#fff" : "#000",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Paragraph + Image */}
      <div className='slco'>
          <div className="slco-h">
        <h2> {activeTab.heading}</h2>
        <p>
          {activeTab.paragraph}
        </p>
        <div className="hero1btn">
        <div className="left-main-btn"><button>Call Now</button></div>
        <div className="right-main-btn"><button>Get Free Consultation</button></div>
        </div>
       </div>
        <img
          src={activeTab.img}
          alt={activeTab.label}
        />
      </div>
      </div>
  {/* Buttons */}
  <div className="sec-slide">
    <h2>YOUR UTMOST CHANCE OF BECOMING A <br/> PUBLISHED BESTSELLER WRITER</h2>
    <p style={{fontSize:"15px", textAlign:"center"}} >Our team of extremely talented ghost book writers and editors ensures that they don’t waste a single drop of sweat,<br/> making you one of the most sought-after writers of the century!</p>
      <div className='sec-slide-images'>
        {gallery.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveGallery(item)}
            style={{
              backgroundColor: activeGallery.id === item.id ? "#333" : "#ccc",
              color: activeGallery.id === item.id ? "#fff" : "#000",
            }}
          >

            {item.label}
          </button>
        ))}
      </div>



      {/* Image Gallery */}
      <div className='img-gallery'
      >
        {activeGallery.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${activeGallery.label} ${index + 1}`}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Slides