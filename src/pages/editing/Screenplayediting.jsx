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


const Screenplayediting = () => {
    
  const paras = [
    <>Professional Screenplay Editing Services
 </>,
<>Writing a screenplay can be a headache but should we tell you editing takes up to your whole life?</>,
<> Yes, you read that right! Screenplay editing is not a child’s game and that is why you certainly need an experienced screenplay editing service! We are here to take your script to the next level.</>
  ];
  const sectionData = [
    {
      heading: "Hire a Screenplay Editor Today!",
      subheading: "We heard that you have piled up your scripts and now waiting for the right person to make the necessary changes to it. Well if that is the case then you are at the right place. We comprise a team of screenplay editors who know no boundaries when it comes to elevating the sense of writing.",
      items: [
       "Even if your scripts are hardly understandable, our screenplay editors can work on them to turn the tables. We have been in the industry for quite a few years now and understand all the basic and advanced standards of screenplays. And for you to accomplish something big in the industry, it's essential to get your project checked now and then.",
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Our Screenplay Editor For Hire Can Make The Audience Go Wild!",
      subheading:"Breaking into filmmaking is no piece of cake unless you have the required degree and years of experience in the field. And the very first step of this staircase is screenplay. If you think you can do it right but don’t know anyone who can edit or proofread it, we can help you with that.",
      items: [
        "We work around the clock to make sure that all your dreams come true.",
        "Hire our screenplay editors if you think you need an expert opinion.",
        "Our editors are highly qualified and experienced to take on any challenge."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Choose Our Screenplay Editors?",
      subheading:"Our skilled staff thoroughly examines your screenplay to pinpoint areas that need work in the areas of storyline, character development, pacing, and general structure. We strive to make dialogue more genuine and consistent with the voices of the characters. Moreover, here’s what you get by hiring our team of screenplay editors."
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What to look for when editing a script?",
    "answer": "Look for consistency in characters, a compelling plot, a clear structure, and engaging dialogue. Check for pacing issues, eliminate unnecessary scenes, and ensure that the script aligns with the overall vision and genre."
  },
  {
    "question": "What makes a good screenplay editor?",
    "answer": "A good screenplay editor possesses a keen understanding of storytelling, pays attention to detail, provides constructive feedback, respects the writer's voice, and has knowledge of industry standards. Effective communication skills and a collaborative approach are essential."
  },
  {
    "question": "What is the process of screenplay editing?",
    "answer": "The editing process involves a thorough analysis of the script, addressing plot and character issues, refining dialogue, ensuring consistency, and professional formatting. It's a collaborative effort between the editor and the writer, involving multiple rounds of feedback and revisions to enhance the overall quality."
  },
  {
    "question": "How do I edit my screenplay?",
    "answer": "Start by taking a break to gain a fresh perspective. Then, review for overall structure, character development, and plot coherence. Focus on each element in subsequent passes, checking dialogue, pacing, and consistency. Seek feedback from others, and be open to revisions to refine your screenplay effectively."
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


export default Screenplayediting