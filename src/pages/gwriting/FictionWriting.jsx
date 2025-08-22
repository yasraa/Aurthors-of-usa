import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/side-books.png'
import Rightbook from '../../assets/ficl.png'

import img1 from '../../assets/action.png';
import img2 from '../../assets/children.png'; 
import img3 from '../../assets/fantasy.png';
import img4 from '../../assets/erotic.png';


const FictionWriting = () => {
    
  const paras = [
    <>Fiction Ghostwriting Services: Turning Your Stories Into Reality</>,
<>Have a story burning inside you, but struggling to find its voice? </>,
<>Our expert fiction ghostwriters are here to help. Whether it's a novel, short story, or any creative piece, our team of proficient fiction ghostwriters for hire is what you need to turn your vision into a masterpiece. Let us help you create a story that’s uniquely yours, created with professionalism and a love for the art of fiction. </>
  ];
  const sectionData = [
    {
      heading: "Why Our Fiction Ghostwriting Services Perfect For Your Story?",
      subheading: "Writing an engrossing work of fiction takes more than just words on a page; it's about creating an experience that keeps the readers transfixed from start to finish. Our talented fiction ghostwriters for hire know exactly how to weave a kind of story that brings your vision to life with vivid imagery, gripping plots, and unforgettable characters.",
      items: [
       "Experienced writers with proven talent will bring depth and expertise to each project.",
       "Customized approach to fit your unique story and goals.",
       "Exceptional fiction writing that meets the highest standards.",
       "High-quality work, on time, and within budget."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Hire Fiction Ghostwriter From Our Team, & Let Your Story Shine",
      subheading:"When you hire fiction ghostwriter from us, like a Science fiction ghostwriter, you get a partner who will work closely with you to frame a story that will stay true to your ideas and will strike a chord with your audience.",
      items: [
        "A wealth of experience in creating engrossing storylines across a wide range of genres.",
        "A diverse team of ghostwriters skilled at forming authentic and resonant stories.",
        " Close collaboration for developing characters, plots, and themes that perfectly align with your creative direction."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Do You Need Best Fiction Ghostwriters For Hire?",
      subheading:"We understand you and your desire for outstanding manuscripts right when you need them, and hence, we are here for all of it with our writing services. Our primary objective is to empower you to achieve your publishing goals and soar higher without sacrificing quality. We will breathe life into your literary vision and will create a resonating write-up."
    },

  ];
const mainthreeparas = [
  <>Fiction Ghostwriters For Hire: Making Your Dreams Come True</>,
  <>Thinking of writing your first fiction book? Wait no more. Hire a fiction ghostwriter from us to collaborate with you and unlock your literary potential. Whether it's a captivating story or a heartfelt romance, our romance ghostwriter can help frame a best-seller book that will surely outshine everything else in the market.</>
]



  const faqData =[
  {
    "question": "What Is A Fiction Ghostwriter, And What Do They Do?",
    "answer": "A fiction ghostwriter is a professional who writes a novel or story based on your ideas, plot, and characters, while you remain the credited author."
  },
  {
    "question": "Why Should I Hire A Ghostwriter For My Fiction Book?",
    "answer": "Hiring a ghostwriter ensures your story is written professionally, polished, and engaging, even if you lack the time or writing experience."
  },
  {
    "question": "How Long Does It Take To Complete A Fiction Ghostwriting Project?",
    "answer": "The timeline varies by book length and complexity, but most fiction ghostwriting projects take several months."
  },
  {
    "question": "How Much Do Fiction Ghostwriters Charge?",
    "answer": "Rates depend on the writer’s experience, the book’s length, and the scope of the project—typically ranging from a few thousand to tens of thousands of dollars."
  },
  {
    "question": "Are There Any Additional Fees Beyond The Initial Ghostwriting Quote?",
    "answer": "Some projects may include extra costs for editing, revisions, research, or publishing assistance, depending on your agreement."
  },
  {
    "question": "What Factors Affect The Cost Of Fiction Ghostwriting Services?",
    "answer": "Factors include the book’s length, research requirements, writer’s expertise, genre, and deadlines."
  },
  {
    "question": "Will I Retain Full Ownership Of The Book Once It's Written?",
    "answer": "Yes, reputable ghostwriting agreements ensure you keep full rights and authorship of the finished book."
  }
]








const tabs = [
  {
    id: 1,
    label: "DRAMA",
    paragraph: "A good drama strikes the heart of the reader, and hence, there are a large number of readers who take a liking to reading drama rather than fantasy or fiction. What’s better than satisfying their cravings and creating a good drama that will keep them engrossed? Join hands with us today to publish your drama book and explore our story writing services for exceptional storytelling.",
    img: img1, // main image shown below
    heading: "DRAMA",
  },
  {
    id: 2,
    label: "HISTORICAL FICTION",
    paragraph: "Our fiction ghostwriters for hire have this distinct ability to use fictional elements for bringing authentic historical facts to new insights, all true to the era. Our team can help you create a piece that can take the readers to the dimensions of the past, from Ancient Rome to World War II.",
    img: img2, // main image shown below
    heading: "HISTORICAL FICTION",
  },
   {
    id: 3,
    label: "ACTION FICTION",
    paragraph: "A good action story can keep the readers on their toes. We have a team of talented ghostwriters who can provide you with facilities like military fiction writing services to create appropriate content for this genre and entertain the readers until the end.",
    img: img3, // main image shown below
    heading: "ACTION FICTION",
  },
   {
    id: 4,
    label: "FANTASY",
    paragraph: "Want a story that has witches, wizards, magicians, talking animals, and everything mystical? We got your back. Let us team up with you to create a magical experience for your readers using our great expertise.",
    img: img4, // main image shown below
    heading: "FANTASY",
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
export default FictionWriting