
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/wikir.png'
import Rightbook from '../../assets/wikil.png'
import img1 from '../../assets/action.png';
import img2 from '../../assets/children.png'; 
import img3 from '../../assets/fantasy.png';
import img4 from '../../assets/erotic.png';


const Picturebookedit = () => {
    
  const paras = [
    <> Picture Book Editors For Hire</>,
<>Get Yourself A Picture Perfect Book</>,
<> We have skilled picture book editors for hire who can give a new shape to your picture book with text-book editing and the most creative minds. Call us when you want to make a name for yourself in the industry.</>
  ];
  const sectionData = [
    {
      heading: "Picture Book Editors For Hire",
      subheading: "A picture book will look like a raw, random and unorganized photo gallery if it is made by an amateur or a person who lacks the vision and creative instinct. Therefore, the best you can ever do for your picture book is to hire experienced picture book editors. Not out of ego, but everybody knows who has the greatest picture book editors in the market. What are you waiting for? Just give us a call and see how we transform your raw photo gallery into an aesthetic picture book.",
      items: [
       "Punctual With Deliveries",
       "Error-Free Content",
       "Years Of Experience",
       "Impeccable Writing"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Hire Our Picture Book Editors And Experience Greatness",
      subheading:"Making a name for yourself in the industry requires nothing, just the help of an experienced individual who is a superhero waiting to save the day. Just like that, hire our picture book editors and experience what it feels like to be at the top, to be the greatest, to be the one everybody admires. Our Picture Book editors make sure to be there with you throughout the journey",
      items: [
        "Veterans In Rhyming",
        "Time and Resource Efficiency.",
        "Creativity and Innovation.",
        "Versatility",
        "Confidentiality"
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Reasons To Hire Our Picture Book Editors",
      subheading:"You may find many editors who promise to improve your book significantly, but we have the proof to back up our claim. We are the best choice for picture book editing services. We review your book and correct all the errors, making it meet your expectations. Our dedication is not the only reason to hire us; here are some more compelling ones; read them and then decide for yourself."
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!

 </>
]



  const faqData =[
  {
    "question": "What does picture book editing involve?",
    "answer": "Picture book editing focuses on refining the text, illustrations, layout, and overall presentation to create a cohesive and engaging story for young readers."
  },
  {
    "question": "How do edits improve a picture book's quality?",
    "answer": "Edits enhance clarity, flow, and coherence in the story. They also ensure that the illustrations complement the text, resulting in a more captivating and visually appealing book."
  },
  {
    "question": "Can I provide input or feedback during the editing process?",
    "answer": "Absolutely! Author input is valuable. Your insights help align the editing process with your vision for the picture book, ensuring it resonates with your intended audience."
  },
  {
    "question": "How long does the picture book editing process take?",
    "answer": "The duration varies based on the complexity of the project. Typically, it can range from a few days to a few weeks, ensuring meticulous editing while meeting deadlines."
  },
  {
    "question": "Will the editing process alter the original story or illustrations significantly?",
    "answer": "The goal of editing is to enhance and refine the existing content to make it more impactful. Edits aim to elevate the story and illustrations without altering the essence of your original work."
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


export default Picturebookedit