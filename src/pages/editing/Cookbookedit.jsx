
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



const Cookbookedit = () => {
    
  const paras = [
    <>Add Spice To Your Recipes With Our Exceptional Cookbook Editors For Hire
 </>,
<>Your recipes look good, but do you know how to make them delicious?</>,
<> Simple, Our Cookbook editors for hire. We have the taste buds of a food inspector and the skills of the best creative writers.</>
  ];
  const sectionData = [
    {
      heading: "Our CookBook Editing Services Are Your Secret Ingredients For Your Cookbook",
      subheading: "Just like a particular dish, there is an experienced chef, waiting to add the spices and sauces to hike up the taste of it. Such chefs are the maestros in their job. Just like that, we are those chefs, but for your already-written cookbook. You have done a tremendous job but lack some of the secret sauce that will make your recipe stand out from the rest. Don’t need to worry about it; just call us and see how we add taste to your insipid cookbook.",
      items: [
       "Excellent Writing",
       "Impeccable Writing",
       "Punctual With Deliveries",
       "Years Of Experience"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "We Have The Best Cookbook Editors Necessary For Your Success",
      subheading:"It’s a dream of every author that their book is on the shelf of every other house. And having that dream turned into a reality is possible only if your book is well-written, well-versed, and error-free. How is that possible? You may ask? Just give us a call, simple. Our expert cookbook editors have invested the time, effort, energy, and passion in our craft to master the art.",
      items: [
        "Veterans In Rhyming",
        "Creativity and Innovation.",
        "Time and Resource Efficiency.",
        " Confidentiality"
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Reasons To Work With Our Skilled Cookbook Editors",
      subheading:"You may find many editors who promise to improve your book significantly, but we have the proof to back up our claim. We are the best choice for editing a cookbook. We review your book and correct all the errors, making it meet your expectations. Our dedication is not the only reason to hire us; here are some more compelling ones; read them and then decide for yourself."
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Book Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What Does a Cookbook Editor Do?",
    "answer": "A cookbook editor refines and polishes written content, ensuring recipes are clear, accurate, and cohesive. They enhance readability, correct grammar, and ensure culinary terms are well-defined."
  },
  {
    "question": "How Much Does Hiring a Cookbook Editor Cost?",
    "answer": "The cost varies based on factors such as the editor's experience, the length of the cookbook, and the level of editing required. Rates can range from hourly fees to project-based costs."
  },
  {
    "question": "What Qualifications Should a Cookbook Editor Have?",
    "answer": "Ideally, a cookbook editor should have experience in editing culinary content, knowledge of cooking techniques, a keen eye for detail, proficiency in grammar, and an understanding of different cuisines."
  },
  {
    "question": "Can a Cookbook Editor Help with Recipe Development?",
    "answer": "Some cookbook editors also offer recipe development services, providing guidance on creating new recipes, adjusting flavors, and ensuring recipes align with the cookbook's theme."
  },
  {
    "question": "Do Cookbook Editors Provide Design Services?",
    "answer": "While many focus solely on editing written content, some editors may offer design advice or work in collaboration with graphic designers to enhance the cookbook's layout and aesthetics."
  },
  {
    "question": "What Information Should I Provide to a Cookbook Editor?",
    "answer": "Provide the editor with the complete manuscript, recipe instructions, any specific style guidelines, and details regarding the cookbook's target audience and theme."
  },
  {
    "question": "Can a Cookbook Editor Help with Publishing or Marketing?",
    "answer": "While not all editors offer these services, some might provide guidance on publishing options, connecting authors with publishers, or offering advice on marketing strategies for the cookbook's release."
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


export default Cookbookedit