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


const Editsforself = () => {
    
  const paras = [
    <> Hire Editors For Self-publishing Authors</>,
<>Are you looking for editors who can self-publish your book for you?</>,
<>If the answer is yes then you are at the right place. Writers of USA provide you with an experienced team of editors for self-publishing authors. Tap on the button given below and get redirected to our team! </>
  ];
  const sectionData = [
    {
      heading: "Authors Do Need Self-Publishing Editing Services!",
      subheading: "For a decade, we used to think that traditional publishing was the only and safest way until we got introduced to self-publishing. Editors help you choose which is the best way to publish. And that’s why it's crucial to handpick your team of editors. It doesn’t end here; a lot goes into the whole process of editor selection.",
      items: [
       "If you never get to edit even a simple piece of writing, you won’t understand why it's important.",
       "But only a real editor specializing in Self-Publishing Editing Services knows that it's more than just proofreading to correct grammar. ",
       "The overall structure of your book decides its final destination. And that can either be a well-known bookshelf or just an ignored draft."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Self-Publishing Editorial Services",
      subheading:"When you are finished writing your book, that’s when it begins for editors. Say you have come to us with a perfect manuscript, but deep down, you know that it's “not that perfect.” Or else, why would you come to us, right? There is nothing bad about getting professional assistance.",
      items: [
        "A detailed conversation with the author helps us to understand their purpose.",
        " Our focus is to meet reader’s expectations through your book",
        "We provide support in terms of marketing and publication as well",
        " Our team goes through each page to check the tone, voice, and development"
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Choose Our Editors for Self-Publishing?",
      subheading:"For many, editing might be just a job, but for us, it's more than that. We take every little part of this job very seriously, and that’s why we always deliver the best results. Our clients don’t just invest their money but their trust and time while hiring us. We can’t think of letting them down; therefore, we bring forth the best."
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What does the editor do?",
    "answer": "An editor refines and improves written content. They correct grammar, enhance clarity, address structural issues, and ensure consistency. Depending on the type of editing (developmental, copyediting, proofreading), they focus on different aspects, such as overall story coherence, language refinement, or error correction."
  },
  {
    "question": "Why should I give my script to an editor?",
    "answer": "Giving your script to an editor ensures a fresh and objective perspective. Editors provide constructive feedback, catch errors, and enhance your work's overall quality, increasing its chances of success."
  },
  {
    "question": "How much do editors for self-publishing authors charge?",
    "answer": "Rates can range from a few hundred to several thousand dollars. It's advisable to discuss rates upfront and choose an editor whose services align with your budget and manuscript needs."
  },
  {
    "question": "Does it take too long to edit 500 pages?",
    "answer": "It depends on factors like the editor's speed, the complexity of the content, and the level of editing required. While it can take several weeks to a few months for a comprehensive edit, timelines vary. Clear communication with your editor about deadlines is essential."
  },
  {
    "question": "What to look for while hiring an editor?",
    "answer": "When hiring an editor, consider their experience in your genre, client testimonials, and the specific services they offer. Look for someone who understands your vision, communicates well, and fits your budget. A collaborative and professional approach is key to a successful editor-author relationship."
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


export default Editsforself