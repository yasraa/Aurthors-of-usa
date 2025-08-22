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



const Publishingcompany = () => {
    
  const paras = [
    <>Book Publishing Services</>,
    <>Crafting Your Manuscript Into A Masterpiece</>,
   <>Ready to see your book in print? We have got you covered. Our book publishing services are designed to convert your manuscript into a refined, professional work of art. From editing and design to printing and distribution, we offer distinguishing support every step of the way. Let us help you immortalize your book for a lifetime.</>
  ]
  const sectionData = [
    {
      heading: "Premium Book Publishing Services To Make Your Stories Pitch Perfect",
      subheading:"Have you finished writing a great book but don’t know what to do next?",
      items: [

  "Maintain complete creative control over every aspect of your book, from the cover design to the final word.",
  "See your book available to readers much quicker than the often lengthy traditional publishing process.",
  "Get gorgeous physical copies of your book through our reliable book printing services, the kind you'll be excited to show off.",
  "As one of the best self publishing companies, we pride ourselves on our commitment to author success and providing comprehensive, high-quality services."

],

      img: Sidebook
    },
  ];
    const section2Data = [
    {
      heading: "How Best Self Publishing Companies Get You Results",
      subheading:" Breathing life into your book can feel like a big leap, and you might be wondering where to start. If you're looking for self publishing help in USA, you are exactly where you need to be. We get that you want your story to really connect with readers, and sometimes a little professional polish can make a huge difference  ",
      
      items: [
  "We guide authors to navigate their own publishing path, giving them full control.",
  "Our Amazon book publisher services emphasize quality at every step of the journey.",
  "We want to help your work reach readers worldwide.",
  "We encourage creativity and new ideas.",
  "Our services are here to help you meet your literary goals.",
  "We aim to make a meaningful difference in the literary world."
],

      img: Rightbook
    },
  ];
     const mainoneData = [
    {
      heading: "What Makes Our Self Publishing Services Stand Out",
      subheading:"Think of our self book publishing services less as a hands-off service and more as your dedicated co-pilot on this exciting journey. We're not just about checking boxes, we're about getting deep into your book, learning about its heart and soul, and tailoring our expertise to your help your unique voice shine. We are here to make your self-publishing experience feel less like navigating a maze and more like a collaborative triumph."
    },

  ];
const mainthreeparas = [
<>Take Control Of Your Book's Journey With Our Trusted Self Book Publisher For Hire</>,
<>We Hire self book publisher through us and take that exciting first step towards sharing your story. Let our self publishing consultant in USA help you unlock your full author potential and create a book that truly mesmerizes readers and makes your voice heard loud and clear.</>
]



  const faqData =[
  {
    "question": "What services does your Self-Publishing program include?",
    "answer": "Our self-publishing program offers comprehensive support—ghostwriting, editing, proofreading, formatting, cover design, marketing, book trailers, author website creation, ISBN setup, and distribution across platforms like Amazon, Kindle, Barnes & Noble, Google Books, and Kobo." 
  },
  {
    "question": "How much does self-publishing with Writers of USA cost?",
    "answer": "We offer tiered service bundles starting from our Basic package at around $499 up to our top-tier Bestseller package, with flexible pricing that supports authors at every stage and budget." 
  },
  {
    "question": "What’s included in your different publication packages?",
    "answer": "Packages include manuscript editing, formatting, typesetting, cover design, unlimited revisions, and rights retention, with higher tiers adding ISBN assignment, book trailers, brand marketing, website creation, and broader distribution." 
  },
  {
    "question": "Will I keep the rights to my book?",
    "answer": "Absolutely—you retain full ownership of your work. Our services are designed to empower authors, not take away rights." 
  },
  {
    "question": "How quickly can my book be live on platforms like Amazon?",
    "answer": "Our streamlined process—from manuscript to final product—is designed for efficiency, enabling faster publication compared to traditional routes." 
  },
  {
    "question": "How do you support authors in marketing their self-published book?",
    "answer": "We guide you with brand-focused marketing, promotional content, video trailers, author websites, and strategic distribution to maximize visibility and reach." 
  }
]









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


export default Publishingcompany