
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Slides from '../../components/Slides';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import FAQ from '../../components/Faq';
import Sidebook from '../../assets/edir.png'
import Rightbook from '../../assets/edil.png'

import img1 from '../../assets/lied.png';



const Booktrailer = () => {
    
  const paras = [
    <>Video Book Trailer Services.</>,
<>Create an Enormous Hype With Our Impressive Services</>,
<> Do you want your book to be known before you let it out to the public? Are you tired of not getting the desired results for your effort? Say no more! Because Writers of USA is here to cater to all your needs in a blink of an eye! Hire our book trailer services today and let your work shine brighter than the sun.</>
  ];
  const sectionData = [
    {
      heading: "Give Your Book The LimeLight It Deserves With Our Book Video Trailer Services!",
      subheading: "Is your book struggling to earn prominent recognition in a sea of competitors? Do you want to draw more readers' attention and give your book the needed edge? At Writers of USA, we know that producing a book trailer can be the difference between a book that gets read and one that gets neglected. That's why we're here for you to bring your book to the spotlight with a visually enchanting and emotionally influential book trailer. Our professionals specialize in making trailers that fascinate audiences and develop buzz. So, if you're ready to make your book talk of the town, let Writers of USA narrate it through the book trailer.",
      items: [
  "Ghostwriting",
  "Proofreading",
  "Book Editing",
  "Book Formatting",
  "Book Marketing",
  "Book Cover Designs"
],

      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "Professional Book Trailers Without Haste!",
      subheading:"Collaborate with us to get a joyous experience and open a new era of your book promotion. We pride ourselves on making phenomenal book trailer production for our clients over the years that helped them earn a stellar reputation in the industry. Our team of experienced professionals is dedicated to producing first-class trailers that perfectly depict your book's main idea and intrigue your readers' attention. Also, we give affordable pricing that won't break the bank ",
      items: [
  "Illustrations that instantly draw readers in and tell a story on their own.",
  "Graphics that fit perfectly with your book’s theme and content.",
  "Clear and consistent communication between illustrators and authors.",
  "Affordable pricing, so you get great work without breaking the bank.",
  "Fast turnaround times, so your project stays on track."
],

      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "Why Our Book Trailer Services?",
      subheading:"Our services include everything from book trailers, ghostwriting to editing and publishing assistance. Whether you need help crafting a compelling storyline, creating a trailer for your book, or want to polish your manuscript, our team of experienced individuals is here to help. We pride ourselves on providing exceptional service and producing high-quality work. Don’t let your ideas gather dust on a shelf. Contact the best book trailer services today, and let us help you with whatever you require."
    },

  ];
const mainthreeparas = [
<>Bring Your Story to Life With Our Impeccable Services By Your Side!</>,
<>Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!</>
]



  const faqData =[
  {
    "question": "What are Book Video Trailer services?",
    "answer": "They are professionally produced short videos that bring your book to life through cinematic visuals, music, and storytelling—designed to captivate your audience and build hype."
  },
  {
    "question": "How can a book trailer help promote my book?",
    "answer": "A compelling trailer sparks curiosity and emotional interest—it increases visibility online, encourages shares, and amplifies pre-launch excitement."
  },
  {
    "question": "Who creates the book trailer?",
    "answer": "An expert team of storytellers, animators, editors, and sound designers collaborate to transform your narrative into a dynamic visual experience."
  },
  {
    "question": "Can the trailer match any genre or tone?",
    "answer": "Yes—whether your book is a ghost story, romance, so, mystery, or sci-fi, trailers are customized to reflect the genre’s mood and thematic essence."
  },
  {
    "question": "How does the creative process work?",
    "answer": "It starts with concept development based on your book, followed by animation, editing, review, and your final approval before launch."
  }
]








const tabs = [
  {
    id: 1,
    label: "Character Illustrations",
    paragraph: "Our proficient book design illustration experts create characters that truly reflect their personalities, emotions, and unique traits. Hire book illustrators to design characters for fun children’s books and even serious novels that feel real and connect with readers.",
    img: img1, // main image shown below
    heading: "Character Illustrations",
  },
  {
    id: 2,
    label: "Scene & Setting Illustrations",
    paragraph: "We help set the scene with beautiful, detailed illustrations. Our artwork brings the world of your story to life even if it’s a magical landscape or a busy city, giving readers a place to step into.",
    img: img1, // main image shown below
    heading: "Scene & Setting Illustrations",
  },
   {
    id: 3,
    label: "Cover Art Design",
    paragraph: "A reader will lose interest in your book if it's poorly constructed, failing to reach the goal of being a bestseller. But don’t worry, we’ve got your back. With our structural editing, your write-up will gain a solid framework, ensuring strong connections between scenes, narrative coherence, suitable graphics, proper spacing, and correct format and margins. Our expert editors will structure your book in a way that will keep the readers hooked from start to finish.",
    img: img1, // main image shown below
    heading: "Cover Art Design`",
  },
   {
    id: 4,
    label: "Action & Dynamic Illustrations",
    paragraph: "We add movement and energy to your scenes for books that are full of action and suspense. Our dynamic illustrations make your dramatic battle or thrilling chase feel alive with excitement.",
    img: img1, // main image shown below
    heading: "Action & Dynamic Illustrations",
  },
   {
    id: 5,
    label: "Conceptual & Abstract Illustrations",
    paragraph: "If your book dives into deeper ideas or abstract concepts, we create illustrations that express those themes in a powerful way. These visuals add a layer of depth to your story, making it thought-provoking and intriguing.",
    img: img1, // main image shown below
    heading: "Conceptual & Abstract Illustrations",
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



export default Booktrailer