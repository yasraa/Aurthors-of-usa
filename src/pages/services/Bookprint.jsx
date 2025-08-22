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

import img1 from '../../assets/action.png';



const Bookprint = () => {
    
  const paras = [
    <>Book Printing Services</>,
    <>Transforming Your Blueprints Into Books</>,
    <>Have you finished writing your book and are now ready to share it with the world? If yes, then you’ve come to the right place. Our specialty at WritersOfUSA is providing the very best book printing services that will help you realize your vision.</>
  ]
  const sectionData = [
    {
      heading: " Let Your Readers Flip Through Your Story With Our Photo Book Printing Services",
      subheading: "Making your book stand out is our main goal. At our book printing company, we recognize that a book is a reflection of your creativity and voice, not just words on paper. We provide a wide range of book printing services to give your work the first-grade care that it deserves. Our skilled team is here to help you improve every element of your book, from design advice to the most elegant finishing that will make readers instantly fall in love. ",
      items: [

  "Custom Book Printing Services",
  "Design & Layout Services",
  "Cover Art Design",
  "Professional Binding",
  "Proofreading & Editing",
  "Online Book Printing"


],

      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "How Does Our Book Printing Company Give You Value",
      subheading:" Digital formats cannot match the unique experience that printed books provide. Physical books are still important for the following reasons:Choose WritersofUSA as your trusted custom bookmaker, and experience the joy of seeing your words come to life in printed form. Embrace the convenience of our online book printing services, and let us be your dedicated online book printer.  ",
      items: [
  "Immersive Reading Experience",
  "Aesthetic & Artistic Value",
  "Classic Nostalgia",
  " Increased Author Credibility",
  "Long-Term Durability"
],

      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "What Makes Our Book Printing Company The Best?",
      subheading:"It is our #1 goal to assist you in making your dream book a reality. You will receive individualized support, the utmost commitment to your vision and a smooth experience from start to end with WritersOfUSA."
    },

  ];
const mainthreeparas = [
<>Print Your Book To Share Your Story With The World</>,
<>Experience the power of outstanding craftsmanship and engaging design with our custom children’s book printing services. Allow WritersOfUSA to help you spark creativity on every page by bringing your story to life with vibrant drawings, innovative formats, and superior quality.</>
]



  const faqData = [
  {
    question: "Can I Get A Single Book Printed And Bound?",
    answer: "Yes, you can print and bind even a single copy of your book. This is ideal for proof copies, personal keepsakes, or limited editions before placing a larger order."
  },
  {
    question: "How Do I Choose An Online Book Printing Service?",
    answer: "Look for a printing service that offers quality printing options, customization, affordable pricing, and reliable turnaround times. Reading reviews and checking sample work also helps in making the right choice."
  },
  {
    question: "How Do Online Book Printing Services Work?",
    answer: "You upload your manuscript and cover design, select specifications like size, paper type, and binding, and then place your order. The printing service produces your book and ships it directly to you."
  },
  {
    question: "What Photo Book Printing Service Is The Best, And Why?",
    answer: "The best photo book printing service is one that provides high-resolution printing, durable binding, and customizable layouts to showcase your images beautifully. Services that offer both affordability and premium quality are ideal."
  },
  {
    question: "Can I Create A Custom-Sized Photo Book?",
    answer: "Yes, custom sizes are available for photo books. You can choose dimensions that best fit your vision, whether you want a compact square book or a large coffee-table style layout."
  },
  {
    question: "What Is The Minimum And Maximum Number Of Pages For A Photo Book?",
    answer: "Most photo books require a minimum of around 20 pages, while the maximum can go up to several hundred pages depending on the binding style and paper type you select."
  },
  {
    question: "What Type Of Paper Options Are Available For Photo Books?",
    answer: "You can choose from a variety of paper options, including matte, glossy, and premium finishes. Each option affects the look and feel of your images, from soft and elegant tones to vibrant, high-contrast colors."
  }
];









const tabs = [
  {
    id: 1,
    label: "Customized printing",
    paragraph: "We offer personalized book printing to match your specific needs. Choose from a variety of bindings and finishes to create a professional look. Our top-quality printing makes your vision come true.",
    img: img1, // main image shown below
    heading: "Customized printing",
  },
  {
    id: 2,
    label: "On-demand printing",
    paragraph: "Need memoirs, documents, or marketing materials quickly? With our memoir writing services and on-demand printing, you can print in whatever quantity you want, with fast turnaround and no minimum order.",
    img: img1, // main image shown below
    heading: "On-demand printing",
  },
   {
    id: 3,
    label: "Ebook Conversion",
    paragraph: "Turn your manuscript into a well-structured eBook. We handle the conversion to various formats, making sure your content is prepared for readers on any platform. For additional support, explore our book review services to enhance your eBook's credibility and reach.",
    img: img1, // main image shown below
    heading: "Ebook Conversion",
  },
   {
    id: 4,
    label: "Book Distribution",
    paragraph: "Broaden your reach with our book distribution. We connect you with a wide network of retailers, distributors, and online platforms to get your book in front of more readers around the world.",
    img: img1, // main image shown below
    heading: "Book Distribution",
  },
   {
    id: 5,
    label: "Ebook Distribution",
    paragraph: "We distribute your eBooks to the biggest online stores and platforms, increasing your chances of maximum sales and visibility. ",
    img: img1, // main image shown below
    heading: "Ebook Distribution",
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


export default Bookprint