
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/movier.png'
import Rightbook from '../../assets/moviel.png'

import img1 from '../../assets/action.png';
import img2 from '../../assets/children.png'; 
import img3 from '../../assets/fantasy.png';
import img4 from '../../assets/erotic.png';
import img5 from '../../assets/suspense.png';
import img6 from '../../assets/drama.png';



const Movie = () => {
    
  const paras = [
    <>Movie Script Writers For Hire From Concept To Screenplay</>,
<>Need help in bringing your movie idea to life?</>,
<> Our seasoned movie script writers for hire can turn your vision into an exciting, unforgettable story. From compelling storytelling to dynamic dialogue, our experts compose scripts that attract audiences and elevate your project to the next level. Let us turn your ideas into screen-ready masterpieces.</>
  ];
  const sectionData = [
    {
      heading: "The Narrative Brilliance Of Our Movie Script Writers",
      subheading: "Our best movie script writers are the creative force behind every mesmerizing story, framing intricate plots, dynamic characters, and powerful emotions into scripts that garner the attention of audiences. They are proficient in creating experiences that linger long after the credits roll. Take a look at what we offer:",
      items: [
       "Custom Movie Scripts",
       "Genre-Specific Scripts",
       "Collaborative Screenwriting",
       "Script Developmental Packages"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Explore The Film World With The Best Movie Script Writers",
      subheading:"Scriptwriting services aren’t just about telling a great story. It’s about penning masterpieces that easily win hearts, keeping people hooked and wanting more. When you get a movie script writers for hire, you win an earnest partner who makes your narrative an unforgettable experience. We collaborate closely with you throughout the writing process to make sure your ideas dazzle on screen.",
      items: [
        "Our team of movie script writers knows how to create stories that stick with people.",
        "They’re experts at framing characters, emotions, and plots that keep viewers excited and moved",
        "Our motive is to create real and relatable characters and design moments that make your audience laugh, cry, and cheer.",
        "The world you imagine can come to life on the big screen with our undeterred support.",
        "We write a screenplay starting from the first idea to the final scene that goes beyond expectations."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "How Our Movie Script Writers For Hire Can Benefit Your Project",
      subheading:"Our best movie script writers help you with all of your writing needs including scripts, movie writing, or anything in between. We’ll put our experience and dedication to taking your story from concept to the big screen. If you’re creating a complex screenplay using biography writing services or need help refining a manuscript, our skilled writers are ready to make it true for you."
    },

  ];
const mainthreeparas = [
  <>Create A Blockbuster Film With Our Best Movie Script Writers</>,
  <>Get a professional movie script writers for hire today and enliven your story on the big screen. Let us help you unravel your true creative potential and create a screenplay that sparkles in the world of cinema.</>
]



  const faqData =[
  {
    "question": "What Is The Best Movie Script Writer?",
    "answer": "The best movie script writer is skilled in storytelling, understands your scope, and creates mesmerizing scripts as per your needs."
  },
  {
    "question": "How Do I Hire A Movie Script Writer?",
    "answer": "You can hire a movie script writer through professional services, freelance platforms, or industry recommendations, depending on your project requirements."
  },
  {
    "question": "What Experience Should A Movie Script Writer Have?",
    "answer": "A movie script writer should have experience in writing scripts for similar genres, knowledge of screenplay formatting, and a portfolio of their work."
  },
  {
    "question": "Can I Hire A Movie Script Writer For A Short Film?",
    "answer": "Of course. Many scriptwriters are proficient in writing short films and can create inspirational stories within a limited timeframe."
  },
  {
    "question": "How Long Does It Take To Write A Full Movie Script?",
    "answer": "Writing a full movie script usually takes a few weeks to months, depending on the complexity and writer's process."
  },
  {
    "question": "What Is The Difference Between A Script Writer And A Screenwriter?",
    "answer": "Scriptwriters and screenwriters are often the same. Both write scripts, though some hire screenwriters specifically for film and TV projects."
  },
  {
    "question": "How Many Revisions Will I Get From A Movie Script Writer For Hire?",
    "answer": "Most script writing services offer multiple revisions, often unlimited, to ensure your satisfaction with the final draft."
  },
  {
    "question": "Can I Get A Movie Script Writer For Hire For Rewrites And Edits?",
    "answer": "Yes, movie script writers can refine existing scripts, provide edits, or rewrite them to meet your needs."
  },
  {
    "question": "How Much Does It Cost To Hire A Movie Script Writer?",
    "answer": "The cost varies widely, ranging from a few hundred to several thousand dollars, based on the writer’s experience and project complexity."
  },
  {
    "question": "How Do I Collaborate With A Movie Script Writer On My Project?",
    "answer": "Collaboration typically involves sharing your ideas, providing feedback on drafts, and maintaining open communication throughout the process."
  }
]









const tabs = [
  {
    id: 1,
    label: "Action",
    paragraph: "Do you have a story full of thrilling action and daring adventures? We’re here to help you make it real with our talented screenwriters for hire who can keep readers hooked from the first page to the last.",
    img: img1, // main image shown below
    heading: "ACTION",
  },
  {
    id: 2,
    label: "Children",
    paragraph: "Writing for children requires care and lots of creativity. Every word, tone, and story must be put together in a way that sparks their imagination and keeps their attention. Our expert writers can help you create a magical book that transfixes young minds.",
    img: img2,
heading: "CHILDREN",
  },
  {
    id: 3,
    label: "Fantasy",
    paragraph: "Have you thought about writing a story filled with witches, wizards, magical creatures, and everything out of the ordinary? Our fiction ghostwriting services will help you compose the perfect fantasy story of your dreams.",
    img: img3,
heading: "FANTASY",
  },
  {
    id: 4,
    label: "Romance",
    paragraph: "If you're willing to write a heartfelt romance novel with a dynamic love story, we can help you create it. Our writers will turn your distinct ideas into a tale of passion, connection, and unforgettable emotions.",
    img: img4,
    heading: "Romance",
  },
  {
    id: 5,
    label: "Suspense",
    paragraph: "Imagine writing a story that grips readers and keeps them guessing till the end. Our writers can do exactly that. We’ll help you write a suspenseful masterpiece that can enamor the readers till the very end.",
    img: img5,
    heading: "SUSPENSE",
  },
  
   {
    id: 6,
    label: "Drama",
    paragraph: "Do you want to compose a story that has raw feelings, complex characters, and situations that can tug at the heartstrings? Our team can help you turn your ideas into a mesmerizing drama book that readers will most definitely love.",
    img: img6,
    heading: "DRAMA",
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
export default Movie
