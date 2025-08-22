import '../styles/hero.css';
import Trusticon from '../assets/trust-icon.png'
import Amazon from '../assets/amazon.webp';
import Google from '../assets/gbook.webp';
import Draft from '../assets/draft.webp';
import Smash from '../assets/smash.webp';
import Kita from '../assets/kita.webp';
import Contact from './Contact';
const Hero = ({paras,sections,secsections}) => {
    
  return (
    <div className='hero'>
      <div className="main1">
      <div className="main-left">
        <div className="left-main-para"> {paras.map((para, index) => (
        <p key={index}  className={
    index === 0
      ? "first-para"
      : index === 1
      ? "second-para"
      : "third-para"
  }>{para}</p>
      ))}</div>
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
    <div className="web-logos">
      <img src={Amazon} alt="Amazon" />
      <img src={Google} alt="Google" />
      <img src={Draft} alt="Draft" />
      <img src={Smash} alt="Smash" />
      <img src={Kita} alt="Kita" />
    </div>






    <div className="main2">
      <div className="left-main2">
        
        {sections.map((section, index) => (
        <div key={index} className='space' >
          <h3>{section.heading}</h3>
          <p>{section.subheading}</p>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
       <div className="hero1btn">
        <div className="left-main-btn"><button>Call Now</button></div>
        <div className="right-main-btn"><button>Get Free Consultation</button></div>
        </div>
      </div>
      <div className="mainimg">
<img src={sections[0].img} alt="" />
</div>
    </div>



    <div className="main3">
      <div className="mainimg">
      <img style={{width:"400px", height:"auto"}} src={secsections[0].img} alt="" />
      </div>
      <div className="left-main3">
        
        {secsections.map((secsection, index) => (
        <div key={index} className='space' >
          <h3>{secsection.heading}</h3>
          <p>{secsection.subheading}</p>
          <ul>
            {secsection.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      
    </div>



    </div>
  );
};

export default Hero;
