import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/wikir.png'
import Rightbook from '../../assets/wikil.png'


import img1 from '../../assets/action.png';
import img2 from '../../assets/children.png'; 
import img3 from '../../assets/fantasy.png';
import img4 from '../../assets/erotic.png';


const Lineediting = () => {
    
  const paras = [
    <>Transform Your Writing With Our Line Editing Services </>,
<>If you are willing to take your writing to the next level then our professional line editing services are here to serve the purpose. </>,
<> Our talented editor’s focus on polishing every sentence, ensuring your manuscript is clear, immersive, and just perfect. It doesn’t matter to us if you're an experienced author or starting out, the sole objective of our ghost line editing services is to fit your needs and make your writing sparkle. </>
  ];
  const sectionData = [
    {
      heading: "Hire Our Line Editing Services For Flawless Sentence Precision",
      subheading: "Professional line editors are capable of elevating your narrations by sharpening your sentences and making them easier to read. They fix mistakes, improve the flow, and refine the style while keeping your unique voice intact. They also provide helpful feedback along the way so you can keep doing better as an author. With best line editing services, your work won’t just look good but it will leave a lasting impression on readers as well.",
      items: [
       "Clearer Sentences",
       "Constructive Feedback",
       "Error-Free Writing",
       "Constructive Feedback"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Top Tier Ghost Line Editing Services From People’s Most Loved Company",
      subheading:"Our professional line editors are like word wizards who turn plain sentences into something mesmerizing and influential. They focus on making your writing sharp, clear, and easy to read, while keeping your unique style as it was. No stiff edits are made here, we just write what feels natural and refined.",
      items: [
        "Perfecting grammar without overdoing it.",
        "Restructuring sentences for a better impression",
        " Ensuring your ideas come through clearly and powerfully.",
        "Maintaining consistency in tone and style."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Top Reasons To Hire Our Professional Line Editor",
      subheading:"Our line editing services go beyond just fixing errors. We focus on improving the flow and clarity of your writing, ensuring your message is clear and immersive. We’ll make sure your sentences are smooth and concise even if it's a personal story or something specialized like medical ghostwriting. Here’s why our professional line editors are the right choice to take your text to the next level."
    },

  ];
const mainthreeparas = [
  <>Unleash Your Story & Let It Sparkle Globally</>,
  <>Our professional line editors will refine your entire write up and make something extraordinary out of it. We offer ghost line editing services that keep your work attractive and mistake-free throughout. Hire a line editor today for flawless editing that will take your book to the next level.</>
]



  const faqData =[
  {
    "question": "What does a line editing service include?",
    "answer": "Sentence-level refinement to enhance clarity, flow, and writing style—across fiction, non-fiction, academic, business, and lyrical content."
  },
  {
    "question": "Which types of writing can benefit from line editing?",
    "answer": "Fiction, non-fiction, academic scripts, business proposals, poetry, short stories, screenplays, and web content, all receive genre-specific polish."
  },
  {
    "question": "How does line editing differ from proofreading or copy editing?",
    "answer": "Line editing focuses on stylistic and structural language clarity rather than just correcting grammar or formatting."
  }
]









const tabs = [
  {
    id: 1,
    label: "Fiction Line Editing:",
    paragraph: "Our expert line editors get your story written with the help of our fiction ghostwriting services, checking every detail to keep characters consistent, plots seamless, and the story immersive. We make sure your readers stay hooked from start to finish of the book.",
    img: img1, // main image shown below
    heading: "Fiction Line Editing:",
  },
  {
    id: 2,
    label: "Academic Line Editing:",
    paragraph: "Let us help you in making your academic work stand out with our expert ghost line editing services. We refine the structure, fix citations, and sharpen clarity to increase the impact and credibility of your research.",
    img: img2, // main image shown below
    heading: "Academic Line Editing:",
  },
   {
    id: 3,
    label: "Non-Fiction Line Editing:",
    paragraph: "Writing non-fiction is a separate thing, but making it stand out is what really gets attention. Our line editors will ensure your ideas are clear, precise, and impressively convincing. We'll fact-check, increase readability, and adjust your arguments to make your work stronger and more interactive.",
    img: img3, // main image shown below
    heading: "Non-Fiction Line Editing:",
  },
   {
    id: 4,
    label: "Creative Writing Line Editing:",
    paragraph: "Adding a unique touch to your work can be tough, but it’s what keeps readers hooked. That’s what we are for. We’ll take your poetry, short stories, essays, or even screenplays and help them be unique in the best way possible. Our line editing and screenplay writing services will refine the language, sharpen the imagery, and ensure everything flows seamlessly.",
    img: img4, // main image shown below
    heading: "Creative Writing Line Editing:",
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


export default Lineediting