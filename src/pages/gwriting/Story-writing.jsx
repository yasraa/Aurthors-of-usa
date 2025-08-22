import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/stroryr.png'
import Rightbook from '../../assets/storyl.png'

import img1 from '../../assets/crea.png';



const Storywriting = () => {
    
  const paras = [
    <>Discover The Best Short Story Writers For Hire Today!</>,
<>We sense something is cooking inside your head</>,
<> and you want to say it out loud but can’t gather the courage. We think this is the right time to hire a professional story writer to compose and publish your story. Explore our ghost story writing service today! </>
  ];
  const sectionData = [
    {
      heading: "Great Short Story Writing Services At Your Disposal!",
      subheading: "Our team is here to help you turn your ideas into reality. Since the day we started working for this company, we took everything personally. If you trust us with your stories, we make them as inspiring as possible because we understand their importance in your life. Our services include short story ghostwriting and editing assistance under one roof, so you don’t have to wander here and there to find other reasonable services. Just click on the button and find a service that you need!",
      items: [
       "Skilled authors who can write fascinating, memorable short stories",
       "Tailored to the author's style and preferences while keeping the plot",
       "Editing and proofreading to produce a publishable, error-free document"
      ],
      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Why Should You Hire A Story Writer?",
      subheading:"A team of experienced great short story writers can help you with all your writing needs. If you are a newbie in this, you might be unfamiliar with publishing standards; hence, a professional writer must do the work for you. Hire a book writer today, and give your words meaning. You can put your trust in us and don’t have to take our word for it since our exceptional work speaks for itself. Our clients proudly affirm that we have some of the finest and Best short story writers in the industry. We are here to turn your book into a best-seller. Contact us now to get started on your story-writing journey in countless genres of fiction and non-fiction!",
      items: [
        " Professional storytelling: Well-developed characters, fascinating stories, and profound emotions can hook readers.",
        "Fresh perspective: A narrative writer brings your ideas to life and explores new perspectives, making your story richer and more unique.",
      ],
      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Choose Our Story Book Writing Services?",
      subheading:"Our best short story writers for your next story are all you need. First of all, You may ask why they are highly talented and their published stories are loved and adored by many. But that is not all; our writers take your project personally and provide you with the best quality scripts. Here are some more reasons to give us a chance to make a change in your life:"
    },

  ];
const mainthreeparas = [
  <>Bring Your Story to Life With a Story Writer by Your Side!</>,
  <>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "Do story writers edit or proofread their work?",
    "answer": "Once the writer completes his work, he proofreads and edits their work to avoid any kind of mistake."
  },
  {
    "question": "How can I hire a short story writer?",
    "answer": "By completing all the necessary information on our website, you can quickly hire a book writer, and our staff will contact you shortly after."
  },
  {
    "question": "What to consider when writing a short story?",
    "answer": "Crucial elements include theme, characters, plot, setting, tone, and duration. Concentrate on capturing readers' attention, conveying your point clearly, and producing an interesting experience."
  },
  {
    "question": "What are the important things for a short story?",
    "answer": "A captivating theme, clear writing, an interesting plot, good pacing, a vivid setting, and a satisfying conclusion. Make a strong impression on readers."
  }
]








const tabs = [
  {
    id: 1,
    label: "CREATIVE",
    paragraph: "With your needs in mind, our short story writers create engrossing storylines. We make stories come to life with creative themes, engaging protagonists, and vibrant backdrops. Let us turn your concepts into captivating stories.",
    img: img1, // main image shown below
    heading: "CREATIVE",
  },
  {
    id: 2,
    label: "NARRATIVE",
    paragraph: "We specialize in narrative story creation and create captivating stories for various audiences. They enthrall readers with deft narratives, engaging characters, and vivid settings, instilling a love of storytelling that cuts across time and culture.",
    img: img1, // main image shown below
    heading: "NARRATIVE",
  },
   {
    id: 3,
    label: "EXPOSITORY",
    paragraph: "With expository tale services, we provide educational and illuminating narratives. Our writers simplify complex topics and make them fascinating by using precise explanations, intelligent analysis, and interesting examples. Readers are left feeling enriched and educated as a result. Let us turn your concepts into illuminating tales.",
    img: img1, // main image shown below
    heading: "EXPOSITORY",
  },
   {
    id: 4,
    label: "DESCRIPTIVE",
    paragraph: "Through words, a descriptive form of writing, our team creates vivid situations and feelings. We immerse readers in the story's universe with rich details, sensual language, and vibrant imagery, creating experiences that readers will never forget. Let us create stories that eloquently convey the core of your vision.",
    img: img1, // main image shown below
    heading: "DESCRIPTIVE",
  },
   {
    id: 5,
    label: "PERSUASIVE",
    paragraph: "Services that create persuasive stories create tales that persuade and influence. We captivate readers' hearts and minds through engaging arguments, realistic events, and emotional resonance, encouraging them to adopt new viewpoints or take significant actions. Let's tell tales that inspire belief and change.",
    img: img1, // main image shown below
    heading: "PERSUASIVE",
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
export default Storywriting