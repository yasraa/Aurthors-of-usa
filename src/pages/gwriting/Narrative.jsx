import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/narl.png'
import Rightbook from '../../assets/narr.png'

import img1 from '../../assets/ficwo.png';
import img2 from '../../assets/realt.png'; 
import img3 from '../../assets/edun.png';
import img4 from '../../assets/digia.png';
import img5 from '../../assets/bras.png';


const Narrative = () => {
    
  const paras = [
    <>Engaging Narratives, Expertly Crafted By Our Narrative Writing Services</>,
<>Great storytelling pulls readers in, makes them feel something</>,
<> Our narrative writing services are here to take all of your hesitations to help you create a dynamic story that sticks. </>
  ];
  const sectionData = [
    {
      heading: "Your Story Deserves The Best - Hire Narrative Writers Today",
      subheading: "Do you want to create a story that keeps readers transfixed from start to finish or to write a story that pulls them into another world and makes them feel every emotion? If yes then you have found your knight in shining armour.",
      items: [
       "Stories made just for you that are designed to pull readers in and keep them hooked.",
       "A strong history of writing narratives that connect with people on a deeper level.",
       "Years of experience writing in different genres and styles, adapting to any vision and scope."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Literary Masterpiece Narrative Writing Services For You",
      subheading:"Good storytelling goes beyond merely writing words on a page, it is also about attracting readers and igniting emotions in them. That is what we do best as one of the top narrative writing companies. Our team of adept narrative writers knows how to shape stories that are influential and mesmerizing.",
      items: [
        "Stories that transport readers to new worlds and different eras.",
        "Realistic characters that leave an ever-lasting impression.",
        "Writers who explore diverse themes and genres to create truly distinct narratives.",
        "The undeniable power of storytelling to inspire, entertain, and stir emotions."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why A Narrative Writers For Hire Is the Key To Your Next Great Story",
      subheading:"We’re here to help you in every way and form if you have a great story that you want to share with the world. Our narrative writing services for books and stories cover everything from ghostwriting and editing to publishing support. Our experienced writers are ready to bring your words to the page if you need a riveting plot, polished prose, or fascinating biography writing services."
    },

  ];
const mainthreeparas = [
  <>Your Message, Your Story - Told The Way It Deserves</>,
  <>Your story matters and this is why it should be told in a way that grabs attention and keeps readers hooked. Our narrative writing services for books and stories do just that. We help shape your story with the right words, making it clear, gripping, and memorable.</>
]



  const faqData =[
  {
    question: "What Types Of Stories Can Professional Narrative Writers Create?",
    answer: "Professional narrative writers can create a wide range of stories, including personal narratives, brand stories, fictional works, non-fiction narratives, and storytelling pieces tailored for marketing, entertainment, or educational purposes."
  },
  {
    question: "What Industries Or Businesses Benefit From Narrative Writing Services?",
    answer: "Narrative writing services benefit industries like publishing, marketing, entertainment, education, non-profits, corporate branding, and any business that wants to connect with its audience through compelling storytelling."
  },
  {
    question: "How Do I Find The Best Narrative Writers For Hire?",
    answer: "To find the best narrative writers, look for professionals with a proven portfolio, client testimonials, relevant experience in your genre or industry, and the ability to understand and reflect your unique voice."
  },
  {
    question: "How Does The Narrative Writing Process Work?",
    answer: "The narrative writing process typically involves understanding your goals, conducting research, creating an outline, drafting the story, revising based on feedback, and finalizing the content for publication or presentation."
  },
  {
    question: "How Much Does It Cost To Hire A Narrative Writer In The U.S.?",
    answer: "The cost of hiring a narrative writer in the U.S. varies based on the project's complexity, length, and the writer’s experience. Rates can range from a few hundred to several thousand dollars."
  },
  {
    question: "How Long Does It Take To Complete A Narrative Writing Project?",
    answer: "Completion time depends on the scope and complexity of the project. Short narratives may take a few days, while full-length works can require several weeks or months."
  }
];







const tabs = [
  {
    id: 1,
    label: "Fictional Worlds",
    paragraph: "Step into the world of fiction, where stories become incredible adventures. Our authors create rich, exciting stories that are filled with unique characters, vividly portrayed settings, and plots that garner your attention from the first page. We ensure every story, even if it's a thrilling mystery, a touching romance, or an expansive fantasy feels authentic.",
    img: img1, // main image shown below
    heading: "Fictional Worlds",
  },
  {
    id: 2,
    label: "Real-Life Tales",
    paragraph: "True stories deserve to be told in a way that feels personal and yet powerful. Our team writes biographies, memoirs, and autobiographies that highlight the experiences, struggles, and victories of real individuals. We help in reliving the memories, making sure every detail is authentic and meaningful.",
    img: img2, // main image shown below
    heading: "Real-Life Tales",
  },
   {
    id: 3,
    label: "Educational Narratives",
    paragraph: "Learning should be just as exciting as a great story or else readers might lose interest in informative content fast. Our educational narratives blend facts with exciting storytelling to make complex topics easy to understand. We create content based on topics like history, science, and cultural stories that inform and entertain at the same time.",
    img: img3, // main image shown below
    heading: "Educational Narratives",
  },
   {
    id: 4,
    label: "Digital Adventures",
    paragraph: "Stories aren’t just limited to being written in books. Our digital narrative writing services include interactive stories, video scripts, and content for online platforms for gaming, animation, or multimedia projects. We design narratives that keep audiences engrossed in fresh and dynamic ways.",
    img: img4, // main image shown below
    heading: "Digital Adventures",
  },
   {
    id: 5,
    label: "Brand Storytelling",
    paragraph: "Every brand has its own story, and our narrative writing services help tell it in a way that connects with people. We create clear, compelling narratives for marketing, websites, or company messaging, that showcase your brand’s voice and true values. Strong storytelling makes your brand stand out, and we’re here to help make that happen.",
    img: img5, // main image shown below
    heading: "Brand Storytelling",
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
export default Narrative