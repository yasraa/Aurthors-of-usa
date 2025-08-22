
import Nav from '../../components/nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/comicl.png'
import Rightbook from '../../assets/comicr.png'

import img1 from '../../assets/supera.png';
import img2 from '../../assets/fantr.png'; 
import img3 from '../../assets/scisaga.png';
import img4 from '../../assets/ht.png';
import img5 from '../../assets/sol.png';


const Comic = () => {
    
  const paras = [
    <>Hire a Comic Book Script Writer To Create Magic!</>,
<> The world has countless writing styles; each person contains their thoughts and concepts while writing. Whether fiction or nonfiction, comic or history, we are here to provide you with our various ghostwriting and editing services. Our experienced comic book script writers ensure to stay caught up, especially in comic book writing.</>
  ];
  const sectionData = [
    {
      heading: "Comic Writing Service that Everyone Can Afford",
      subheading: "If you are thinking of scripting a comic book, but the only thing holding you back is the expense, then let us assure you it won’t be a burden. Whether you are a student or just another corporate employee, our comic book script writer assistance is affordable to every comic lover! We know this love for comics will only increase with time, so you should work on it ASAP.",
      items: [
       "We have known this industry for a long time, so we keep it casual and cool. Our well-qualified and experienced comic book writers will work on your ideas."
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Let Your Childhood Dream Come True With Our Comic Book Writing!",
      subheading:"You have the idea, plot, and climax; you only need a little help from a comic script writer to create a story read and loved by millions of comic fans. And who knows, it will get bigger than the DC and Marvel comics? Let's just say you can create magic, and we don’t want to bother Marvel and DC fans; they have been there for a long time now, and it's better not to forget they are the heroes. However, a story can have multiple climaxes and endings, right?",
      items: [
        "Comprehensive book services from beginning to conclusion.",
        "  Our ghostwriting services include cover design and graphics, layout, publication, and marketing.",
        "   We provide quality assurance during the duration of the project.",
        " A streamlined procedure from idea to publication."
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Should You Hire Our Comic Book Writers?",
      subheading:"Our services include everything from comic book ghostwriting to editing and publishing assistance. Whether you need help in crafting a compelling storyline or want to polish your manuscript, our team of seasoned writers is here to help. We pride ourselves on providing exceptional service and producing high-quality work. Don’t let your ideas gather dust on a shelf. Hire the best comic book writing services today."
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Comic Book Writer by Your Side!</>,
  <>Hire a Comic book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What to consider when making a comic?",
    "answer": "While creating a comic, you must understand its storyline and idea. The art style and consistency come later. The page layout and flow should be smooth. A comic is always balanced between graphics and dialogue."
  },
  {
    "question": "How does comic writing work?",
    "answer": "Writing a comic requires a gripping plot, dialogue, and panel descriptions. To effectively interest readers, writers and artists work together to translate the narrative into sequential art, taking into account pacing and page arrangement. A well-crafted and eye-catching comic book or strip is the result."
  },
  {
    "question": "What not to do when making a comic?",
    "answer": "Keep panels clear of extra text or information that could confuse readers. Don't compromise the comic's continuity regarding art direction and character designs. Avoid sacrificing the value of narrative and character development in favor of eye-catching graphics."
  },
  {
    "question": "What is the purpose of a comic?",
    "answer": "A comic is meant to amuse and interest readers through a visual storytelling format, fusing art and narrative to provoke feelings and communicate ideas successfully. Depending on the creator's intentions, comics can also be used as a form of self-expression, social critique, or educational tool."
  }
]









const tabs = [
  {
    id: 1,
    label: "Superhero Adventures",
    paragraph: "Dive deep into the world of capes and powers with our superhero comic book writing service. Whether you're creating iconic heroes or anti-heroes, we craft compelling narratives filled with action, suspense, and dynamic characters.",
    img: img1, // main image shown below
    heading: "Superhero Adventures",
  },
  {
    id: 2,
    label: "Fantasy Realms",
    paragraph: "Embark on epic quests and magical realms with our fantasy comic book writing service. From mythical creatures to enchanting landscapes, we weave tales that transport readers to imaginative worlds filled with wonder.",
    img: img2,
heading: "Fantasy Realms",
  },
 
  {
    id: 3,
    label: "Sci-Fi Sagas",
    paragraph: "Explore the possibilities of the future and alternate realities with our sci-fi comic book writing service. From space exploration to futuristic technologies, we craft stories that challenge the boundaries of science and fiction.",
    img: img3,
    heading: "Sci-Fi Sagas",
  },
  {
    id: 4,
    label: "Horror Thrills",
    paragraph: "For those who crave spine-chilling tales, our horror comic book writing service delivers scares that linger. We create atmospheric stories that keep readers on the edge of their seats, drawing them into a world of suspense and fear.",
    img: img4,
    heading: "Horror Thrills",
  },
  {
    id:5,
    label:"Slice of Life",
    paragraph:" If you're drawn to heartfelt and relatable stories, our slice-of-life comic book writing service captures the essence of everyday experiences. We bring depth to characters and emotions, weaving narratives that resonate with readers.",
    img:img5,
    heading:"Slice of Life"
  }
  
 
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
export default Comic