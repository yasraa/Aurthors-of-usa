
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/comedy1.png'
import Rightbook from '../../assets/comedy2.png'

import img1 from '../../assets/ssc.png';
import img2 from '../../assets/spc.png'; 
import img3 from '../../assets/wwp.png';
import img4 from '../../assets/oh.png';
import img5 from '../../assets/ians.png';


const Comedy = () => {
    
  const paras = [
    <>Witty, Sharp, & Hilarious Comedy Writing Services</>,
<>Comedy involves more than just telling jokes. It requires timing, cleverness, and understanding of what makes people laugh heartily. Our comedy writing services can transform any concept into something truly funny. Whether you require stand-up material, a humorous script, or entertaining content, we will make sure it resonates effectively with your readers, making your content both amusing and memorable.</>
  ];
  const sectionData = [
    {
      heading: "Crush Every Stage With Stand-Up Comedy Script Writing Services From Our Expert Writers",
      subheading: "While good comedy can elicit laughter, greater comedy leaves a lasting impression. If you need smart, intriguing, and attention-grabbing content, our skilled comedy writers are ready to help you. From clever scripts to stand-up routines, we know how to turn words into blissful laughs.",
      items: [
       "Custom Comedy Scripting: Personalized scripts tailored to your needs.",
       "Stand-Up Comedy Writing: Jokes and routines designed to get laughs.",
       "Comedy Consultation and Workshops: Helping you refine your comedic voice.",
       "Comedy Content Marketing Strategy: Using humor to connect with your audience"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Avail Of Our Comedy Ghostwriting Services & Get The Perfect Punchlines",
      subheading:"Humor can transform your brand, turning casual viewers into enthralled followers. Comedy isn’t just about laughs—it’s about creating a real connection with your audience. That’s why hiring stand-up comedy script-writing services can make a difference.",
      items: [
        "They’ll add sharp, memorable punchlines that make your message stick.",
        " They know how to balance humor with your brand’s unique tone, ensuring consistency.",
        "  They’ll help your marketing shine by injecting humor where it counts.",
        "They can deliver your message in a fun, entertaining way that people want to share."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why We’re The Perfect Fit For Your Comedy Writing Needs",
      subheading:"Our comedy ghostwriting services cover everything from ghostwriting and editing to publishing support. Whether you have a rough idea, a full manuscript that needs some punch, or require witty screenwriters for hire, we will provide you with all sorts of assistance to add humor that lands just right."
    },

  ];
const mainthreeparas = [
  <>MLet’s Turn Your Ideas Into Comedy Gold—Get A Custom Script Now</>,
  <>Our writers understand the rhythm of humor and will help shape your book into something that feels natural, effortless, and genuinely hilarious. Whether you’re composing a funny memoir, a sharp satire, or a lighthearted story writing, we’ll bring out the best in your voice and make sure every joke hits just right.</>
]



  const faqData =[
  {
    "question": "What Types Of Comedy Writing Services Are Available For Businesses Or Individuals?",
    "answer": "We offer stand-up comedy script writing, comedic book writing, humorous content creation for businesses, and tailored comedic pieces for individuals."
  },
  {
    "question": "How Long Does It Take To Get A Comedy Script Written By A Professional Writer?",
    "answer": "Timelines vary by project length and complexity, but most comedy scripts are completed within a few weeks."
  },
  {
    "question": "Do Stand-Up Comedy Script Writing Services Include Editing And Revisions?",
    "answer": "Yes, editing and revisions are included to ensure the script is polished and meets your comedic style."
  },
  {
    "question": "Can Stand-Up Comedy Script Writing Help With Both Short-Form & Long-Form Content?",
    "answer": "Absolutely, we can create both short-form content like one-liners and sketches, as well as full-length stand-up routines."
  },
  {
    "question": "What Should I Provide To A Comedy Writer To Get The Best Results?",
    "answer": "Share your comedic tone, preferred style, target audience, and any personal stories or themes you'd like to include."
  },
  {
    "question": "How Much Do Professional Comedy Ghostwriting Services Cost?",
    "answer": "Costs depend on script length, complexity, and the writer’s experience, but we offer tailored quotes based on your needs."
  }
]








const tabs = [
  {
    id: 1,
    label: "Satire & Social Commentary",
    paragraph: "Satire uses humor to shine a light on serious issues in society. Our writers skillfully mix wit and sharp insights to create stories that entertain while making you put your valuable thoughts on it. We deliver satire with clever dialogue and biting commentary that invites conversation and reflection.",
    img: img1, // main image shown below
    heading: "Satire & Social Commentary",
  },
  {
    id: 2,
    label: "Slapstick & Physical Comedy",
    paragraph: "If you love a good laugh from accidents and funny physical mishaps, our slapstick comedy is just what you need. We set up silly situations where characters find themselves in all sorts of ridiculous predicaments. The humor is fun, easy to enjoy, and comes to life in your imagination. Plus, you can hire children's book illustrators to bring those hilarious moments to vibrant life, adding extra charm and fun to every scene.",
    img: img2,
heading: "Slapstick & Physical Comedy",
  },
 
  {
    id: 3,
    label: "Witty Wordplay & Puns",
    paragraph: "Wordplay is all about clever language, and our comedy writers are experts at it. Our stories are rich with puns, double meanings, and even witty exchanges that will most definitely bring a smile to your face. Whether you are a language enthusiast or someone who appreciates a good laugh, our clever wordplay is bound to hit the spot",
    img: img3,
    heading: "Witty Wordplay & Puns",
  },
  {
    id: 4,
    label: "Observational Humor",
    paragraph: "Life is full of little oddities that make for great comedy. Our observational humor turns everyday moments into funny, relatable situations. We find humor in the mundane events of life, turning the simple stuff into laughs that anyone can appreciate.",
    img: img4,
    heading: "Observational Humor",
  },
  {
    id:5,
    label:"Irony & Sarcasm",
    paragraph:" Irony and sarcasm are perfect for adding a sharp twist to comedy. We play with your expectations, weaving stories with unexpected turns and clever, sarcastic humor. The result is something that feels fresh, funny, and often surprisingly witty.",
    img:img5,
    heading:"Irony & Sarcasm"
  }
  
 
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

export default Comedy
