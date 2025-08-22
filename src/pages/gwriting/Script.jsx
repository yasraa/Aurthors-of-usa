
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/scri.png'
import Rightbook from '../../assets/scril.png'

import img1 from '../../assets/origscri.png';
import img2 from '../../assets/adascri.png'; 
import img3 from '../../assets/screenpl.png';
import img4 from '../../assets/sorbo.png';



const Script = () => {
    
  const paras = [
    <>Take Your Narrative To The Next Level With Our Script Writer For Hire</>,
<>Are you looking for a script writer for hire?</>,
<>We’ve got you covered. Our scriptwriting team creates immersive, professional content designed especially for your needs. We bring brilliant expertise in structure, character development, and dialogue to make your film, commercial, video game, or any other project story dazzle. </>
  ];
  const sectionData = [
    {
      heading: "Why Is A Script Writer For Hire Beneficial For You?",
      subheading: "There are many types of scriptwriting, like those for short films, commercials, and more. In the world of animation, which is constantly growing, stories are everything. Both kids and adults love animated shows for their relatable characters, beautiful visuals, and mesmerising storylines.",
      items: [
       "Skilled and experienced scriptwriters",
       "High-quality, original scripts",
       "A versatile approach for any project",
       "Complete confidentiality",
       "Timely delivery"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Reliable Script Writing Services For Every Story",
      subheading:"We’ve worked with various production outlets to create top-quality animated series that enthral audiences. Suppose you’re looking to infuse reality into your ideas but need help creating the perfect script for various genres. In that case, our remarkable team of scriptwriters, including horror fiction ghostwriters and more, is ready to assist. We specialise in providing scripts designed to match your vision. Here’s what makes our script writing services stand out.",
      items: [
        " Our dedicated screenplay department, led by award-winning writers, provides professional scripts quickly.",
        "You can request a free quote or start working with our team right away.",
        "We’re committed to addressing feedback and making revisions until you’re fully satisfied.",
        " Our script writer for hire follows strict quality control to ensure admirable storytelling, structure, and format."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Are Our Script Writing Services The Right Choice For You?",
      subheading:"Turning an idea into a best-seller can be daunting, but we're here to make it exciting. Enjoy the creative process and watch your story grow into something amazing. With our fiction ghostwriting services, we’ll help you formulate a compelling narrative. Get a scriptwriter and begin your journey now in creating something special together."
    },

  ];
const mainthreeparas = [
  <>Hire A Script Writer To Create Unforgettable Stories With Expert Guidance</>,
  <>Hire a script writer today and take the first step toward your dream of becoming a published author. Along with scriptwriting, our autobiography writing services help you create a meaningful, enchanting book that secures your voice and sets you apart in a sea of writers. Let’s make your bestseller a reality.</>
]



  const faqData =[
  {
    "question": "What Is A Scriptwriter?",
    "answer": "A scriptwriter is a professional who writes scripts for films, television shows, video games, and other media, developing dialogue, character arcs, and storylines."
  },
  {
    "question": "What Types Of Script Writing Services Do You Offer?",
    "answer": "We offer script writing services for a variety of genres, including film, television, animation, commercials, and corporate videos."
  },
  {
    "question": "Why Should I Hire A Professional Scriptwriter?",
    "answer": "A professional script writer ensures your ideas are translated into well-structured, engaging scripts that meet industry standards and captivate your audience."
  },
  {
    "question": "How Long Does It Take To Write A Script?",
    "answer": "The time it takes to write a script varies based on the project’s complexity, but typically, it takes several weeks to a few months."
  },
  {
    "question": "Can A Scriptwriter Write For Different Genres?",
    "answer": "Yes, scriptwriters can adapt to different genres, customising their writing style to match the tone and requirements of each project."
  },
  {
    "question": "Can I Hire A Script Writer For A One-Time Project?",
    "answer": "Yes, you can hire a script writer for a one-time project, whether it’s for a short film, commercial, or other specific needs."
  },
  {
    "question": "What Should I Provide To A Scriptwriter Before Hiring Them?",
    "answer": "Before hiring a scriptwriter, you should provide an outline of your project, any specific requirements, and an idea of the tone and message you want to convey."
  },
  {
    "question": "How Does The Scriptwriting Process Work?",
    "answer": "The process usually starts with brainstorming and research, followed by drafting, revisions, and finalising the script according to your feedback."
  },
  {
    "question": "How Much Does It Cost To Hire A Script Writer?",
    "answer": "The cost of hiring a scriptwriter varies depending on the project’s length, complexity, and the writer’s experience but generally ranges from a few hundred to several thousand dollars."
  },
  {
    "question": "Can I Make Changes To The Script After It's Written?",
    "answer": "Yes, most scriptwriters allow revisions after the initial draft, ensuring the final script meets your expectations."
  }
]








const tabs = [
  {
    id: 1,
    label: "Original script",
    paragraph: "An original script is all about bringing your imagination to the world. You share your thoughts, and we shape them into words. It’s perfect if you have a fresh concept that isn’t tied to any existing story or screenplay.",
    img: img1, // main image shown below
    heading: "Original script",
  },
  {
    id: 2,
    label: "Adapted",
    paragraph: "Do you want to create your own version of a book or story you love? We can make it happen with our adapted scriptwriting. Our script writer for hire can take an existing idea from your favourite book or a classic tale and mould it into something uniquely yours.",
    img: img2, // main image shown below
    heading: "Adapted",
  },
   {
    id: 3,
    label: "Screenplay",
    paragraph: "If you’re dreaming of writing something for the big screen or TV, a screenplay is your go-to. Our talented screenwriters for hire are ready to help you create something amazing, be it drama, comedy, or action.",
    img: img3, // main image shown below
    heading: "Screenplay",
  },
   {
    id: 4,
    label: "Storyboard",
    paragraph: "Are you in need of a script with visuals? Storyboard scripting combines words and graphics to narrate a story. It’s a great way to plan out animations or video projects. Professional animators and directors love using storyboards to visualise and organise their creative process.",
    img: img4, // main image shown below
    heading: "Storyboard",
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
export default Script