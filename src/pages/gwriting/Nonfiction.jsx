import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/narr.png'
import Rightbook from '../../assets/narl.png'

import img1 from '../../assets/nonf.png';



const Nonfiction = () => {
    
  const paras = [
    <>Reach New Heights With Our Non-Fiction Writers For Hire!</>,
<>Our hardworking group of non-fiction ghostwriters goes above and beyond</>,
<>for you to create the story you desire. We create the tales that captivate the globe by planning, strategizing, and delivering them. </>
  ];
  const sectionData = [
    {
      heading: "Hire the Best Non-Fiction Ghostwriters for Your Next Bestselling Book!",
      subheading: "We use clever writing strategies that are like magic for you to bring your story to life. Therefore, contact us today to acquire a qualified non-fiction ghostwriter. Non-fiction electronic publications are well-known in the general digital media; if you want to join the exclusive group of best-selling authors, hire a ghostwriter from one of the most renowned ghostwriting agencies.",
      items: [
       "Over the past few years, we have provided domestic and foreign clientele services",
       "Our professionals have extensive expertise in non-fiction writing. Contact us today to learn more about the various types and genres of e-book writing we provide!"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Let Our Non-Fiction Writing Services Tell Your Story The Way You Want - But Better!",
      subheading:"You should choose a trusted writing agency for your fiction and non-fiction needs, especially non-fiction, because it requires more detail. Our team possesses the quality that a great writer should have to construct non-fiction. Moreover, it is not just about writing; you must ensure the cover complements the story. Hence, we provide each service.",
      items: [
        "Our non fiction writers are dedicated to delivering top-notch services beyond mere aesthetics. We strive for excellence in every aspect of our work.",
        "Whether your book falls into fiction, non-fiction, romance, mystery, or fantasy, we possess in-depth knowledge of each genre's unique requirements.",
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Choose Our Non-Fiction Writing Company?",
      subheading:"Choosing the right partner to bring your vision to life is paramount. At our Non-Fiction Writing Service, we don't just create content; we curate compelling narratives that ignite minds and stir hearts. Here's why you should entrust us with your non-fiction journey:"
    },

  ];
const mainthreeparas = [
  <>Get Your Story Written With Accuracy and Authenticity!!</>,
  <>Ready to share your factual story with the world? Don't wait any longer—hire our dedicated Non-fiction writers and take the first step towards turning your ideas into a remarkable book. Let us guide you in crafting a non-fiction masterpiece that sets you apart in the vast sea of literature. Here's why you should choose us:</>
]



  const faqData =[
  {
    "question": "What are the key characteristics of non-fiction books?",
    "answer": "A good nonfiction book provides accurate, corroborated information and educates readers on contemporary issues. Authors rely on reliable sources and professional judgment when writing their works."
  },
  {
    "question": "What are some popular genres of non-fiction?",
    "answer": "A good thing about non-fiction is that it's not limited to true crime, travel, health, psychology, philosophy, politics, and essays. Instead, it includes books on self-help and personal development, including advice and methods for enhancing a variety of facets of life. Our writers can provide you with services in countless genres of non-fiction."
  },
  {
    "question": "What is the importance of non-fiction in education and personal growth?",
    "answer": "By providing factual and educational content, non-fiction in education broadens students' knowledge while encouraging analytical and critical thinking. It fosters curiosity, promotes lifelong learning, and gives readers the knowledge they need to make wise decisions in their personal and professional lives."
  },
  {
    "question": "Is fact check essential in non-fiction?",
    "answer": "Fact-checking is essential while writing non-fiction. It guarantees the validity and precision of your work. Always verify your facts before publishing them because even a minor error can harm your non-fiction writing reputation."
  }
]








const tabs = [
  {
    id: 1,
    label: "MEMOIRS",
    paragraph: "Dip your toes into our non-fictional memoir writing services. Our team of nonfictional writers is highly qualified and talented. If you want to write any kind of memoir writing, you can choose our affordable non-fiction writing services.",
    img: img1, // main image shown below
    heading: "MEMOIRS",
  },
  {
    id: 2,
    label: "SELF-HELP",
    paragraph: "If you want to write a book about self-help or are an emerging influencer but don’t know where to start, you should check out our sub-category of nonfictional writing. We have some great writers who will assist you with your self-help.",
    img: img1, // main image shown below
    heading: "SELF-HELP",
  },
   {
    id: 3,
    label: "BIOGRAPHIES",
    paragraph: "Experience impeccable biography writing with our extraordinary biography writing services. Our non-fictional writers are known for the best-seller biographies written by them.",
    img: img1, // main image shown below
    heading: "BIOGRAPHIES",
  },
   {
    id: 4,
    label: "HISTORY",
    paragraph: "History is another category that comes under the banner of nonfiction writing, and if you are struggling with your history assignments, contact us and hire our nonfiction writers today!",
    img: img1, // main image shown below
    heading: "HISTORY",
  },
   {
    id: 5,
    label: "ACADEMIC WRITING",
    paragraph: "Apart from the categories mentioned earlier, we also provide academic writing in our non-fiction writing domain. Need help with your scholarly articles? Leave them to our experienced and qualified team of writers!",
    img: img1, // main image shown below
    heading: "ACADEMIC WRITING",
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
export default Nonfiction