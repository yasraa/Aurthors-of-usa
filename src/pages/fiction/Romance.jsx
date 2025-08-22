
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/side-books.png'
import Rightbook from '../../assets/bb.png'

import img1 from '../../assets/action.png';
import img2 from '../../assets/children.png'; 
import img3 from '../../assets/fantasy.png';
import img4 from '../../assets/erotic.png';
import img5 from '../../assets/suspense.png';


const Romance = () => {
    
  const paras = [
    <> Express Your Romantic Tale Through Our Romance Ghostwriters For Hire</>,
<>Want to express but are lost for words?</>,
<>Don’t worry, Writers of USA’s Romance Ghostwriters For Hire are here to help. They give words to your feelings and transform your ideas into heartfelt and engaging romantic novels. Let your imagination run wild as we craft stories that tug at the heartstrings of your readers. </>
  ];
  const sectionData = [
    {
      heading: "Your Love + Our Romance Book Writing Services = Timeless Tales",
      subheading: "Welcome to Writers of USA’s Romance Book Writing Service, where passion, emotion, and unforgettable stories come together. Our team of skilled romance ghostwriters is committed to weaving narratives that transport readers into worlds of love and romance. With our comprehensive range of romance writing services, your dream of becoming a romance novel writer is just a few steps away.",
      items: [
       "Our team consists of the best romance writers who understand the nuances of love and relationships.",
       "Our writers create tailor-made narratives that capture your vision.",
       "From slow-burning romance to sizzling attraction, our writers create chemistry that sparks off the pages."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Feel Love, Passion, and Heartfelt Emotions Through Our Romance Novel Writers",
      subheading:"Our best romance novel writers specialize in crafting heartfelt stories that resonate with readers of all ages. As seasoned romance ghostwriters, they breathe life into characters, creating chemistry and tension that keeps readers hooked till the last page.",
      items: [
        "Our team of romance writers brings professionalism to every page, ensuring your story is beautifully presented.",
        " Whether it's historical romance, contemporary love stories, or even paranormal passions, we cover them all.",
        "Our writers infuse deep emotions that make readers connect with your characters on a personal level."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Choose Our Professional Romance Book Writers?",
      subheading:"Our romance writing service isn't just about crafting words; it's about weaving emotions and crafting experiences that linger in readers' hearts. Here's why you should choose us:"
    },

  ];
const mainthreeparas = [
  <>Share Your Tale With the World and Make It Shine!</>,
  <>Hire our Romance Writers ASAP and get your words to blossom on every page. Let Us Help You fulfill Your Dream.</>
]



  const faqData =[
  {
    "question": "What genres of romance do you specialize in?",
    "answer": "At Writers of USA, our Romance Writing Services cover a wide spectrum of genres, including contemporary, historical, fantasy, paranormal, sweet romance, romantic suspense, and more."
  },
  {
    "question": "Can I provide specific guidelines for my romance story?",
    "answer": "Absolutely! We encourage our clients to share their vision, preferences, and any specific guidelines they have in mind for their romance story."
  },
  {
    "question": "How do you maintain authenticity in romance writing?",
    "answer": "Authenticity is crucial in romance writing, and our team is dedicated to creating genuine connections between characters and capturing the essence of love. Our writers focus on crafting realistic emotions, chemistry, and interactions that resonate with readers."
  },
  {
    "question": "Can you handle sensitive or taboo themes in romance stories?",
    "answer": "Yes, we understand that romance stories can explore a range of themes, including sensitive or taboo subjects. Our writers approach such themes with sensitivity and respect, creating narratives that handle them appropriately while still delivering a compelling love story."
  }
]









const tabs = [
  {
    id: 1,
    label: "Contemporary Romance",
    paragraph: "Our skilled writers craft stories that capture the challenges and emotions of relationships in today's world, delivering heartfelt tales that resonate with readers.",
    img: img1, // main image shown below
    heading: "Contemporary Romance",
  },
  {
    id: 2,
    label: "Historical Romance",
    paragraph: "We transport readers to bygone eras, where chivalry and passion reign. Immerse yourself in the elegance of historical settings and the timeless allure of love stories.",
    img: img2, // main image shown below
    heading: "Historical Romance",
  },
   {
    id: 3,
    label: "Paranormal Romance",
    paragraph: "For those who crave the extraordinary, our paranormal romance writing services blend love with the supernatural. Let our writers create enthralling tales of vampires, werewolves, and otherworldly romance that will keep readers on the edge of their seats.",
    img: img3, // main image shown below
    heading: "Paranormal Romance",
  },
   {
    id: 4,
    label: "Romantic Suspense",
    paragraph: "Our writers skillfully intertwine romance and mystery, creating stories filled with danger, intrigue, and passion. Embark on a thrilling journey where love and suspense collide.",
    img: img4, // main image shown below
    heading: "Romantic Suspense",
  },
   {
    id: 5,
    label: "Sweet Romance",
    paragraph: "Our writers craft stories that focus on the tender moments, the fluttering hearts, and the promise of forever. Let your readers relish in the purity of love's beginnings.",
    img: img5, // main image shown below
    heading: "Sweet Romance",
  },
 
];






  return (
    <div>
              <Nav />
     <Hero paras={paras} sections={sectionData} secsections={section2Data} />
    {/* <Footer /> */}
      <Main mainones={mainoneData} mainthrees={mainthreeparas}/>
      <Slides tabs={tabs} />
<Testimonials/>
      <FAQ data={faqData} />
       <Location />
    <Footer />
    </div>
  )
}


export default Romance