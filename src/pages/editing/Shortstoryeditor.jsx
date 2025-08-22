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



const Shortstoryeditor = () => {
    
  const paras = [
    <> Professional Short Story Editors For Hire
</>,
<>Grasping the reader’s attention with a limited number of words has to be the most complex task</>,
<> However, with our expert and experienced short story editors for hire, you can have a story that is concise, captivating and memorable.</>
  ];
  const sectionData = [
    {
      heading: "Our Short Story Editing Services Help You Express Better With Words",
      subheading: "Choosing the right words to describe anything is not a piece of cake – especially for an average human being. But not for the experts at Writers Of USA. We are a team of skilled, passionate, and experienced writers looking to help people all around the world. Not only that, but we provide you with short story editing services as well. The word count might be limited, but the creativity isn’t – we can write the most creative, professional and amusing story even when the word count is limited. What’s the wait all about? Ring us up and claim respect in the world of short stories.",
      items: [
       "Excellent Writing",
       "Punctual With Deliveries",
       "Error-Free Content"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Our Story Editors For Hire Are Always Looking To Help You",
      subheading:"No matter how good you are at something, having someone who has a wider knowledge than you in QA can be a cheat code to success – and be presentable. Therefore, facing your way towards an expert is always an intelligent choice. So, be intelligent and get in touch with us, and see the graph of your stress decrease while the graph of your professionalism and status increase exponentially.",
   items: [
        "Veterans In Rhyming",
        " Creativity and Innovation.",
        "Versatility",
        "   Time and Resource Efficiency",
        "Confidentiality"
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Reasons To Work With Our Best Short Story Editors",
      subheading:"People might not believe in us when we say that we are the best in the scene when it comes to writing the most appealing and attention-grabbing short stories. Let’s look through the reasons why we are supreme when the lookout is for a short story writing or editing service."
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What are short story editing services?",
    "answer": "Short story editing services involve a comprehensive review and refinement of your short story by professional editors. This includes checking/correcting grammar, punctuation, and spelling errors, as well as in-depth feedback on plot, character development, and narrative structure."
  },
  {
    "question": "Why do I need short story editing services?",
    "answer": "Short story editing services are crucial because they ensure your work is polished to perfection. Editors identify and correct errors, enhancing the readability of your story."
  },
  {
    "question": "How do I choose the best short story editing service for me?",
    "answer": "The right short story editing service involves considering factors like the service's reputation, the expertise of its editors, pricing, turnaround times, and the comprehensiveness of the editing process."
  },
  {
    "question": "What are the benefits of short story editing services?",
    "answer": "The benefits of short story editing services are numerous. They include improved grammar and language use, enhanced narrative structure, engaging character development, and plot coherence. Additionally, editors provide critical feedback for your story's refinement and make it publication-ready, ensuring it stands out to readers and publishers."
  }
]








 
 const tabs = [
   {
     id: 1,
     label: "Developmental Editing",
     paragraph: "During the developmental editing process, your script will be carefully read. This is what we do in order to find and eliminate flaws that may compromise the accuracy and structure of sentences. Texts must be rearranged, and paragraphs must be cut where necessary.",
     img: img1, // main image shown below
     heading: "Developmental Editing",
   },
   {
     id: 2,
     label: "Line Editing",
     paragraph: "Our Line Editors go through your writing, sentence by sentence, searching for ways to make it better. A line editor examines your prose's general readability, sentence structure, word choice, and flow. Using perfect grammar, spelling, or punctuation is not their concern.",
     img: img2, // main image shown below
     heading: "Line Editing",
   },
    {
     id: 3,
     label: "Structural Editing",
     paragraph: "For potential buyers to read or purchase your book, every word must be written perfectly. Our team is prepared to take on problems related to formatting, space, margin, and graphic editing, which are all included in structural editing.",
     img: img3, // main image shown below
     heading: "Structural Editing",
   },
    {
     id: 4,
     label: "Copyediting",
     paragraph: "Our copyediting services are distinct from the rest. In essence, it involves making changes to your work to make sure your book satisfies every requirement in terms of technicality. Additionally, our editors make sure your book complies with publication requirements.",
     img: img4, // main image shown below
     heading: "Copyediting",
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


export default Shortstoryeditor