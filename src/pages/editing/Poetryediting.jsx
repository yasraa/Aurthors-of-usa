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



const Poetryediting = () => {
    
  const paras = [
    <> Our Skilled Poem Editors For Hire</>,
<>Make Your Poem Error-Free </>,
<>We understand the power of words and how each syllable contributes to the symphony of your verses. Whether you're a seasoned poet or just starting your journey, our team of skilled poem editors is here to help your poetry shine. </>
  ];
  const sectionData = [
    {
      heading: "Our Poetry Editing Services Refine Your Poetic Brilliance into a Masterpiece",
      subheading: "Do you have a poem, and when you recite it, it does not feel complete; the rhymes are missing, and the structure is not appealing at all? That's because it has not gone through the eyes of super experts. Hire our experts and see a refined, better, and more polished version of your already-written poem with our poetry editing services",
      items: [
       "Excellent Writing",
       "Punctual With Deliveries",
       "Impeccable Writing",
       "Error-Free Content"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Hire the Best Poetry Editors Who Turn Your Words Into A Masterpiece",
      subheading:"To create an impact, captivate the readers, and enhance the readability of your content, you need a poem that is artistic and harmonious. But crafting such a poem is not easy unless you contact one of our experts.",
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
      heading: "Reasons To Work With Our Poem Editors",
      subheading:"We don't just shoot in the dark; we aim for the target - our goal is clear - that is, to provide the best services possible to our clients. That's why we boast to be the best when it comes to Poem Editing. You may wonder why. Well, that's why below are six compelling reasons to hire our Poem Editors and outshine any competition in the way."
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What is a poem editing service?",
    "answer": "A poem editing service is a professional assistance service that refines and improves poems. Experienced editors review your work for grammar, structure, and poetic elements to enhance the overall quality and impact of your poems."
  },
  {
    "question": "Why do I need a poem editing service?",
    "answer": "A poem editing service is essential to ensure your poetry reaches its full potential. Editors offer an objective, skilled perspective, enhancing clarity, rhythm, and poetic elements, resulting in more impactful and polished poems."
  },
  {
    "question": "How does a poem editing service work?",
    "answer": "A poem editing service typically involves submitting your poems to professional editors. They assess and revise your work, offering feedback and suggestions. The collaborative process continues until you're satisfied with the final, polished version."
  },
  {
    "question": "How much does a poem editing service cost?",
    "answer": "The cost of poem editing services can vary based on factors like the length and complexity of your poems and the level of editing required. Generally, prices range from a few dollars to more significant fees for in-depth editing."
  },
  {
    "question": "How can I find a good poem editor?",
    "answer": "To find a reliable poem editor, consider seeking recommendations, reviewing editor profiles, and assessing their qualifications. Reputable editing services like Writers of USA offer experienced editors for poetry, ensuring high-quality results."
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


export default Poetryediting