import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/wikir.png'
import Rightbook from '../../assets/hol.png'

import img1 from '../../assets/poho.png';
import img2 from '../../assets/soho.png'; 
import img3 from '../../assets/coho.png';
import img4 from '../../assets/goho.png';
import img5 from '../../assets/boho.png';


const Horror = () => {
    
  const paras = [
    <>Grisly, Chilling, and Nightmarish Horror Fiction Ghostwriters For Hire!
 </>,
<>Are you ready to weave tales that haunt your readers' dreams and send shivers down their spines?</>,
<>Our expert Horror fiction ghostwriters are here to unleash the macabre and take your readers on bone-chilling journeys of terror! </>
  ];
  const sectionData = [
    {
      heading: "Dive into the Dark Abyss of Fear and Terror With Our Horror Book Writing Services!",
      subheading: "Horror is a genre that beckons the brave and thrills the adventurous. Our team of skilled horror story writers has a penchant for crafting spine-tingling narratives that leave readers on the edge of their seats. Here's why you should choose our Horror Story Writing service:",
      items: [
       "Tailor-made horror stories instill dread, suspense, and lingering fear.",
       "A proven track record of creating best-selling horror fiction that haunts readers.",
       "Years of experience in creating atmospheric settings and memorable horror characters."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Professional Horror Story Writers For Hire",
      subheading:"Our team of professional horror story writers thrives on delving into the shadows and unearthing the darkest fears. Whether you seek psychological horror, supernatural thrills, or bone-chilling mysteries, our writers have covered you.",
      items: [
        "Gripping and suspenseful horror tales that leave a lasting impression.",
        " Skillfully crafted horror settings that immerse readers in the chilling atmosphere.",
        "Our writers are passionate about exploring the depths of fear and the human psyche.",
        " Embrace the power of horror to evoke primal emotions and adrenaline-pumping terror."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Hire Our Horror Book Writers?",
      subheading:"From eerie haunted houses to malevolent entities, our Horror Story Writing service brings nightmares to life with finesse and creativity. We pride ourselves on crafting horror fiction that keeps readers awake at night and lingers in their minds. Here are the perks you'll enjoy after hiring us:"
    },

  ];
const mainthreeparas = [
  <>Descend into Darkness with Our Expert Horror Story Writers!</>,
  <>Ready to send shivers down spines and haunt readers with your tales? Hire our horror story writers now and witness your darkest fears take form. Let Us Help You Craft Horror Fiction That Leaves Readers Begging for Mercy!</>
]



  const faqData =[
  {
    "question": "What Types Of Horror Stories Can You Write?",
    "answer": "We write all types of horror, including supernatural horror, psychological thrillers, gothic horror, cosmic horror, monster stories, slasher fiction, and more, tailored to your vision."
  },
  {
    "question": "Can You Help Me Develop A Unique Horror Concept?",
    "answer": "Yes! Our professional horror ghostwriters specialize in creating original, chilling, and suspenseful storylines that stand out while matching your creative goals."
  },
  {
    "question": "Do You Offer Horror Editing And Proofreading Services?",
    "answer": "Absolutely. Along with writing, we provide professional editing and proofreading to polish your horror manuscript and ensure it’s publication-ready."
  },
  {
    "question": "How Long Does It Take To Write A Horror Book?",
    "answer": "The timeline depends on length and complexity. A short horror story may take a few weeks, while a full-length horror novel can take several months."
  },
  {
    "question": "Will My Horror Book Idea Remain Confidential?",
    "answer": "Yes. We guarantee full confidentiality, and you retain complete ownership of the work once it’s completed."
  }
]









const tabs = [
  {
    id: 1,
    label: "Psychological Horror",
    paragraph: "Plunge into the depths of the human mind. Psychological horror delves into the fears that reside within us all. It weaves intricate narratives that prey on our vulnerabilities, leaving readers questioning their own sanity as they journey through characters' tormented psyches.",
    img: img1, // main image shown below
    heading: "Psychological Horror",
  },
  {
    id: 2,
    label: "Supernatural Terror",
    paragraph: "Venture beyond the veil that separates the natural and the supernatural. Supernatural horror introduces otherworldly forces, eerie apparitions, and haunted locations that send shivers down the spine. Prepare for encounters with malevolent spirits and inexplicable occurrences.",
    img: img2, // main image shown below
    heading: "Supernatural Terror",
  },
   {
    id: 3,
    label: "Cosmic Horror",
    paragraph: "Peer into the abyss of the unknown. Cosmic horror explores the insignificance of humanity in the face of vast, incomprehensible cosmic entities. It thrives on existential dread, revealing the fragility of our reality and the terror that lies beyond the stars.",
    img: img3, // main image shown below
    heading: "Cosmic Horror",
  },
   {
    id: 4,
    label: "Gothic Horror",
    paragraph: "Enter decrepit mansions, mist-covered graveyards, and forbidden secrets. Gothic horror encapsulates the eerie atmosphere of decaying architecture, gloomy landscapes, and ancient curses. It combines mystery, romance, and horror, transporting readers to a world of dark romanticism.",
    img: img4, // main image shown below
    heading: "Gothic Horror",
  },
   {
    id: 5,
    label: "Body Horror",
    paragraph: "Confront the horrifying transformations of the flesh. Body horror dissects the physical boundaries of human existence, portraying gruesome and unsettling transformations. From mutations to parasitic infestations, this subgenre elicits visceral reactions and plays on the fear of losing control over one's own body.",
    img: img5, // main image shown below
    heading: "Body Horror",
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


export default Horror