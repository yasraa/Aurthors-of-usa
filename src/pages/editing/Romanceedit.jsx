
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


const Romanceedit = () => {
    
  const paras = [
    <>Our Romance Book Editors For Hire!</>,
<>Are you looking for a romance book editor who can assist you in developing your romance novel a little better?</>,
<>An editor who isn’t just driven by the money but is passionate as well. A passion that can change things for good. Well, if you haven’t found the best one yet, we suggest you check out our romance novel editing services. </>
  ];
  const sectionData = [
    {
      heading: "Top The Shelves With Our Romance Novel Editing Services",
      subheading: "If it were a music album, we’d wish you top the charts, but it's not. And since it's more about a romantic script, we think shelve is the best place for a book. Our romance book editors for romantic novels are always striving to give their best shot. We have various renowned projects under our belts, and we would like to do the same for you.",
      items: [
       "Our team specializes in romance fiction, which ultimately makes them an expert in dissecting romance novels.",
       "Readers want a compelling story when they pick up your book. They anticipate that you will lead them on an engaging trip with well-developed characters that they will adore.",
       "And we are sure that you have done that already; it just needs that final kick from the editor."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "We Offer You The Best Romance Book Editing Services",
      subheading:"Your fans desire an adventure, regardless of how steamy or romantic, fanciful or humorous your relationship is. They may even hold out hope for learning. But how would they do it if you are unable to do it? If you think it's your responsibility not to let them down, you must use hawk eye evaluation. This kind of contentment is what brings in the five-star ratings and leads that increase constantly.",
      items: [
        "We collaborate constantly to make you believe that your opinions are heard.",
        "  We aim to cater to your needs.",
        "We support you in marketing and publishing as well.",
        "Our team provides you with every bit of detail."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Choose Our Romance Book Editing Services?",
      subheading:"We understand how close your script can be to your heart, and it has to create the same impact for the readers. But it can only be possible if you consider outside help. It's an excellent accomplishment for writers to get their work published, and we help them do so. Here’s why we are relatively the best romance book editors in the industry right now:"
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What are the different types of editing?",
    "answer": "There are three main types of editing: developmental editing, which focuses on overall structure; copyediting, addressing grammar and style; and proofreading, the final check for errors."
  },
  {
    "question": "Do I need an editor for a romance novel?",
    "answer": "Yes, hiring an editor for a romance novel is crucial. An editor can enhance the plot, refine character development, and address language issues, ensuring your romance novel is engaging, well-paced, and polished for readers."
  },
  {
    "question": "How to find the best romance editor?",
    "answer": "To find the best romance editor, seek professionals with experience in the romance genre. Look for editors who have worked on successful romance novels, check client testimonials, and ask for sample edits. Communication is key—ensure the editor understands your vision and can provide constructive feedback to improve your romance novel."
  },
  {
    "question": "Is the romance genre still in demand?",
    "answer": "Yes, the romance genre remains highly popular and in demand. Readers continue to enjoy a diverse range of romantic stories, from contemporary to historical, paranormal to suspense. If well-written and engaging, a romance novel can find a dedicated audience."
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


export default Romanceedit