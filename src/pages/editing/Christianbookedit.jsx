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



const Christianbookedit = () => {
    
  const paras = [
    <> Professional Christian Book Editors For Hire
</>,
<>We would like to introduce you to the best Christian book editors for hire.</>,
<>  We understand that it's not a good idea to risk your spiritual or religious book’s publication. Thus, if you want an expert perspective, it's best to work with an editor who shares the same beliefs.</>
  ];
  const sectionData = [
    {
      heading: "Have Faith In Our Affordable Christian Editing Services",
      subheading: "There are various convincing ways that people use to elevate your spiritism and a well-versed book is one of them. Because they know that faith is essential. No matter what you do in life, if you are firm enough and hold your spirituality closer to you, you will succeed. That’s why people use their writing skills widely to convince you of their narratives.",
      items: [
       "And if you are one of the writers, then you need to be really careful while crafting such books because they can make or break someone’s belief.",
       "Hence, when you are done writing a book that involves your Christian beliefs, search for trusted Christian editing services that examines it thoroughly before publishing.",
       "Our team of Christian book editors will be more than happy to edit your script."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Hire The Best Christian Book Editors To Meet Your Needs",
      subheading:"It's not just about a single faith; every book that talks about a belief system should not contain any lie or misinformation. When our editorial team takes on any project, they don’t just correct your grammatical errors but fact check also catch their interest. So, there is no chance a book edited by us includes any misinformation.",
      items: [
        "We collaborate constantly to make you believe that your opinions are heard.",
        "We aim to cater to your needs. ",
         "We support you in marketing and publishing as well.",
         "Our team provides you with every bit of detail."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Choose Our Christian Editing Services?",
      subheading:"We don’t have a policy that strictly forbids us to work with newbie writers. So, if you are skeptical that we may or may not take your project, then let us be clear. For us, every writer is the same, and our team puts the same amount of effort into every author’s project. We ensure to provide you with Christian editorial services that are commendable. Here’s why you must choose us:"
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!
</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "Do we need a Christian book editor?",
    "answer": "Whether you need a Christian book editor depends on the content of your book. If your manuscript deals with Christian themes, values, or theology, hiring a specialized editor familiar with Christian literature can ensure accuracy and sensitivity to the subject matter."
  },
  {
    "question": "What is included in Christian book editing?",
    "answer": "Christian book editing involves the same editorial processes as general editing, such as developmental editing, copyediting, and proofreading. The focus, however, is on maintaining alignment with Christian principles, ensuring theological accuracy, and preserving the intended message of faith-based content."
  },
  {
    "question": "Is Christian book editing expensive?",
    "answer": "The cost of Christian book editing varies based on factors like the editor's experience, the level of editing needed, and the length of the manuscript. While specialized editing services may be slightly more expensive, the investment ensures your Christian book is professionally polished, resonates with your target audience, and accurately reflects your faith-based message."
  },
  {
    "question": "What to expect from an editor?",
    "answer": "A professional editor will review your manuscript for grammar, structure, and style. They’ll provide constructive feedback to enhance clarity and coherence. Expect suggestions for improvement, corrections of errors, and, in the case of Christian book editing, attention to theological accuracy. Good communication and collaboration with your editor will result in a polished manuscript that aligns with your vision and resonates with your intended audience."
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


export default Christianbookedit